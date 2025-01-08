let playerList = [];
        const form = document.getElementById('player-form');
        const container = document.querySelector('.container');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const fname = document.querySelector('.fname');
            const lname = document.querySelector('.lname');
            const country = document.querySelector('.country');
            const score = document.querySelector('.score');

            if(fname.value && lname.value && country.value && score.value) {
                const date = new Date();
                const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                
                const player = {
                    name: `${fname.value} ${lname.value}`,
                    country: country.value,
                    date: formattedDate,
                    score: parseInt(score.value)
                };

                playerList.push(player);
                updateLeaderboard();
                form.reset();
            }
        });

        function updateLeaderboard() {
            if(playerList.length > 0) {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }

            container.innerHTML = '';
            playerList.sort((a, b) => b.score - a.score);

            playerList.forEach((player, index) => {
                const card = document.createElement('div');
                card.className = 'player-card';
                
                card.innerHTML = `
                    <div class="player-info">
                        <span class="player-name">${player.name}</span>
                        <span class="player-date">${player.date}</span>
                    </div>
                    <div class="player-country">${player.country}</div>
                    <div class="player-score">${player.score}</div>
                    <div class="action-buttons">
                        <button class="action-btn delete-btn" onclick="deletePlayer(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="action-btn score-btn decrease-btn" onclick="updateScore(${index}, -5)">
                            -5
                        </button>
                        <button class="action-btn score-btn increase-btn" onclick="updateScore(${index}, 5)">
                            +5
                        </button>
                    </div>
                `;

                container.appendChild(card);
            });
        }

        function deletePlayer(index) {
            playerList.splice(index, 1);
            updateLeaderboard();
        }

        function updateScore(index, change) {
            const newScore = playerList[index].score + change;
            if(newScore >= 0) {
                playerList[index].score = newScore;
                updateLeaderboard();
            } else {
                alert("Score cannot be negative!");
            }
        }