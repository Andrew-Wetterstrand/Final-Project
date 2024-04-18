import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('motivationalApp.db');

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

        // Insert initial quotes
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("First seek to know thyself", "Perserverance", "Determination", "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("A confused foe is a beaten foe", "Perserverance", "Determination", "Self-Acceptance")');
        tx.executeSql('INSERT INTO quotes (quote, Inspirational, GoalOriented, SelfLove) VALUES ("There is no victory without sacrifice", "Courage", "Determination", "Self-Acceptance")');
        
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
