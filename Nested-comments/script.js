const initialState = {
    username: "John Doe",
    time: 1727458711867,
    text: "Welcome! You can reply to the comments. But you can't delete the initial comment.",
    counter: 1,
    parentCounter: 0,
    comments: {
        0: {
            username: "Shaji",
            text: "You can reply nested or delete any comment. You can edit the existing comments.",
            counter: 1,
            parentCounter: 0,
            comments: {
                0: {
                    username: "Appu",
                    text: "Refresh & see the changes persist. You can reset the comments to the initial state",
                    counter: 0,
                    parentCounter: 0,
                    comments: {}
                }
            }
        }
    }
};

const savedState = localStorage.getItem("state");
const currentState = JSON.parse(savedState || JSON.stringify(initialState));
const commentTemplate = document.querySelector("#comment-template");

function createExistingComment({username, text}) {
    const commentElement = commentTemplate.content.cloneNode(true);
    commentElement.querySelector(".username").textContent = username;
    commentElement.querySelector(".comment-text").innerText = text;
    commentElement.querySelector(".user-info").classList.remove("hide");
    setViewMode(commentElement);
    return commentElement;
}

function createNewCommentTemplate() {
    const newCommentElement = commentTemplate.content.cloneNode(true);
    newCommentElement.querySelector(".username-input").classList.remove("hide");
    setEditMode(newCommentElement);
    return newCommentElement;
}

function setViewMode(commentElement) {
    const textArea = commentElement.querySelector(".comment-text");
    textArea.contentEditable = false;
    textArea.classList.remove("editable");
    commentElement.querySelector(".reply").classList.remove("hide");
    commentElement.querySelector(".delete").classList.remove("hide");
    commentElement.querySelector(".edit").classList.remove("hide");
    commentElement.querySelector(".submit").classList.add("hide");
    commentElement.querySelector(".cancel").classList.add("hide");
}

function setEditMode(commentElement) {
    const textArea = commentElement.querySelector(".comment-text");
    textArea.contentEditable = true;
    textArea.classList.add("editable");
    textArea.focus();
    commentElement.querySelector(".reply").classList.add("hide");
    commentElement.querySelector(".delete").classList.add("hide");
    commentElement.querySelector(".edit").classList.add("hide");
    commentElement.querySelector(".submit").classList.remove("hide");
    commentElement.querySelector(".cancel").classList.remove("hide");
}

function enableCommentCreation(commentElement) {
    commentElement.querySelector(".comment-text").contentEditable = true;
    commentElement.querySelector(".comment-text").classList.add("editable");
    commentElement.querySelector(".comment-text").focus();
    commentElement.querySelector(".username-input").classList.remove("hide");
    commentElement.querySelector(".cancel").classList.remove("hide");
    commentElement.querySelector(".submit").classList.remove("hide");
}

const commentContainer = document.querySelector("#commentContainer");
const resetButton = document.querySelector("#reset");
let commentState;

function insertComment(parentElement, commentData, parentComment) {
    parentElement.querySelector(":scope > .sub-comments").appendChild(
        createExistingComment({
            username: commentData.username,
            text: commentData.text
        })
    );
    
    const commentWrapper = parentElement.querySelector(":scope > .sub-comments > .comment-wrapper:last-child");
    commentWrapper.querySelector(".profile-pic").src = `https://i.pravatar.cc/32?u=${commentData.username}`;
    
    commentWrapper.querySelector(".reply").addEventListener("click", () => {
        if (!commentWrapper.querySelector(":scope > .sub-comments > .new-comment")) {
            addReplyBox(commentWrapper, commentData);
        }
    });
    
    if (parentComment) {
        commentWrapper.querySelector(".delete").addEventListener("click", () => {
            commentWrapper.remove();
            delete parentComment.comments[commentData.parentCounter];
        });
        
        commentWrapper.querySelector(".edit").addEventListener("click", () => {
            setEditMode(commentWrapper);
        });
        
        commentWrapper.querySelector(".cancel").addEventListener("click", () => {
            commentWrapper.querySelector(".comment-text").innerText = commentData.text;
            setViewMode(commentWrapper);
        });
        
        commentWrapper.querySelector(".submit").addEventListener("click", () => {
            const newText = commentWrapper.querySelector(".comment-text").innerText;
            if (newText) {
                commentData.text = newText;
                commentWrapper.querySelector(".comment-text").innerText = newText;
                setViewMode(commentWrapper);
            }
        });
    }
    
    return commentWrapper;
}

function addReplyBox(parentElement, parentCommentData) {
    parentElement.querySelector(":scope > .sub-comments").appendChild(createNewCommentTemplate());
    const replyBox = parentElement.querySelector(":scope > .sub-comments > .comment-wrapper:last-child");
    replyBox.classList.add("new-comment");
    
    replyBox.querySelector(".cancel").addEventListener("click", () => {
        replyBox.remove();
    });
    
    replyBox.querySelector(".submit").addEventListener("click", () => {
        const username = replyBox.querySelector(".username-input").value;
        const text = replyBox.querySelector(".comment-text").innerText;
        
        if (!username || !text) return;
        
        const newComment = {
            username: username,
            text: text,
            counter: 0,
            parentCounter: parentCommentData.counter,
            comments: {}
        };
        
        insertComment(parentElement, newComment, parentCommentData);
        parentCommentData.comments[parentCommentData.counter++] = newComment;
        replyBox.remove();
    });
}

function renderNestedComments(parentElement, parentComment) {
    for (const comment of Object.values(parentComment.comments)) {
        const commentElement = insertComment(parentElement, comment, parentComment);
        if (comment.comments) {
            renderNestedComments(commentElement, comment);
        }
    }
}

function initializeComments(initialData = initialState) {
    commentContainer.querySelector(".sub-comments").innerHTML = "";
    commentState = initialData;
    const rootComment = insertComment(commentContainer, commentState);
    renderNestedComments(rootComment, commentState);
}

resetButton.addEventListener("click", () => initializeComments());

window.addEventListener("beforeunload", () => {
    localStorage.setItem("state", JSON.stringify(commentState));
});

initializeComments(currentState);