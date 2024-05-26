import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const db = SQLite.openDatabase({
  name: 'Users.Db',
});

const creatTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        [],
        () => resolve(),
        'CREATE TABLE IF NOT EXIST user (id INTEGER PRIMARY KEY AUTOINCREMENT, surname VARCHAR(30), name VARCHAR(30), phone VARCHAR(30),  age VARCHAR(30), photo VARCHAR(30),)',
        (_, error) => reject(error),
      );
    });
  });
};
export {db, creatTable};
