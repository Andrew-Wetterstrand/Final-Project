import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('motivationalApp1.db');

export const initializeDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS quotes (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
                quote TEXT NOT NULL,
                Inspirational TEXT,
                GoalOriented TEXT,
                SelfLove TEXT
            );`
        );

        // Insert quotes
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("First seek to know thyself", "Perserverance", "Determination", "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("A confused foe is a beaten foe", "Perserverance", "Determination", "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("There is no victory without sacrifice", "Courage", "Determination", "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", "Perseverance", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt", "Perseverance", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela", "Perseverance", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Courage is not the absence of fear, but the triumph over it. - Nelson Mandela", "Courage", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("It does not matter how slowly you go as long as you do not stop. - Confucius", "Courage", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Life begins at the end of your comfort zone. - Neale Donald Walsch", "Courage", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all. - Emily Dickinson", "Hope", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. - Helen Keller", "Hope", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Everything you can imagine is real. - Pablo Picasso", "Hope", NULL, NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("The only way to do great work is to love what you do. - Steve Jobs", NULL, "Determination", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Your time is limited, don\'t waste it living someone else\'s life. - Steve Jobs", NULL, "Determination", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", NULL, "Determination", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Stay focused, go after your dreams, and keep moving toward your goals. - LL Cool J", NULL, "Focus", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Concentrate all your thoughts upon the work at hand. The sun\'s rays do not burn until brought to a focus. - Alexander Graham Bell", NULL, "Focus", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("You are never too old to set another goal or to dream a new dream. - C.S. Lewis", NULL, "Focus", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Action is the foundational key to all success. - Pablo Picasso", NULL, "Action", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("The path to success is to take massive, determined action. - Tony Robbins", NULL, "Action", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it. - Jordan Belfort", NULL, "Action", NULL)');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("You yourself, as much as anybody in the entire universe, deserve your love and affection. - Buddha", NULL, NULL, "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("To love oneself is the beginning of a lifelong romance. - Oscar Wilde", NULL, NULL, "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("You are imperfect, permanently and inevitably flawed. And you are beautiful. - Amy Bloom", NULL, NULL, "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Believe you can and you\'re halfway there. - Theodore Roosevelt", NULL, NULL, "Self-Confidence")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("With confidence, you have won before you have started. - Marcus Garvey", NULL, NULL, "Self-Confidence")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("You have to expect things of yourself before you can do them. - Michael Jordan", NULL, NULL, "Self-Confidence")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman", NULL, NULL, "Positivity")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("In the middle of difficulty lies opportunity. - Albert Einstein", NULL, NULL, "Positivity")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("Happiness is not something ready-made. It comes from your own actions. - Dalai Lama", NULL, NULL, "Positivity")');
    });
};

export const getQuotes = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM quotes',
            [],
            (_, { rows }) => {
                const quotes = [];
                for (let i = 0; i < rows.length; i++) {
                    quotes.push(rows.item(i));
                }
                callback(quotes);
            },
            error => {
                console.log('Error fetching quotes: ', error);
                callback([]);
            }
        );
    });
};
