import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('motivationalApp.db');

export const initializeDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS quotes (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
                quote TEXT NOT NULL,
                option1 INTEGER DEFAULT 0,
                option2 INTEGER DEFAULT 0,
                option3 INTEGER DEFAULT 0,
                option4 INTEGER DEFAULT 0,
                option5 INTEGER DEFAULT 0,
                option6 INTEGER DEFAULT 0,
                option7 INTEGER DEFAULT 0,
                option8 INTEGER DEFAULT 0,
                option9 INTEGER DEFAULT 0
            );`
        );

        // Insert initial quotes
        tx.executeSql('INSERT INTO quotes (quote) VALUES ("First seek to know thyself")');
        tx.executeSql('INSERT INTO quotes (quote) VALUES ("A confused foe is a beaten foe")');
        tx.executeSql('INSERT INTO quotes (quote) VALUES ("There is no victory without sacrifice")');
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
