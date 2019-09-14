'use strict';
// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
 * TODO を追加する
 * @param {string} tasks
 * JavaDoc形式は、関数を書いてから/**Enterで自動生成。jsは\*でなんでも入る。stringに変更。
 * 何をキーにして、何を引数にするのか？　何を返り値にするのか？を記載する。
 */
function todo(task) {
    tasks.set(task, false);
}

/**
 * タスクと完了したか どうかが含まれる関数を受け取り、完了したかを返す
 * @param {array} taskAndIsDonePair
 * @return {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair[1];
}
//isHoge? isで状態を聞いている関数という意味
//戻り値がbooleanになる関数はisXXXという名前にする風習あり

/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
* @param {array} taskAndIsDonePair アレイarray
* @return {boolean} 完了していないかどうか　ブーリアンboolean
*/

function isNotDone(taskAndIsDonePair) {
    return !taskAndIsDonePair[1];
    // return !isDone(taskAndIsDonePair);
}

/*
> tasks  [ 連想配列 ]
Map {
    '鉛筆を買う' => true,
    'ノートを買う' => true,
    '消しゴムを買う' => false,
    '筆箱を買う' => false 
}
[ 2次元配列に変換 ]
  > Array.from(tasks).filter((pair)=> pair[1]===false);
[ [ '消しゴムを買う', false ], [ '筆箱を買う', false ] ]
> Array.from(tasks).filter((pair)=> pair[1]===true);
[ [ '鉛筆を買う', true ], [ 'ノートを買う', true ] ]

> Array.from(tasks).filter((pair)=> !pair[1]);　　==> isNotDone関数
[ [ '消しゴムを買う', false ], [ '筆箱を買う', false ] ]
> Array.from(tasks).filter((pair)=> pair[1]);　　==> isDone関数
[ [ '鉛筆を買う', true ], [ 'ノートを買う', true ] ]
*/

/**
* TODOの一覧の配列を取得する
* @return {array}
*/
function list() {
    return Array.from(tasks)
        .filter(isNotDone)  //filter関数は、引数に関数を取る。クロージャ
        .map(t => t[0]);  //アロー関数は、returnが省略できる
}

/**
 * TODO を完了状態にする
 * @param {string} task
 */
function done(task) {
    if (tasks.has(task)) {
        tasks.set(task, true);
    }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {array}
 */
function doneList() {
    return Array.from(tasks)
        .filter(isDone)
        .map(t => t[0]);
}

/**
 *  完了済みのタスク を TODO に追加する   undone機能
 * @param {string} task 
 */
function undone(task) {
    if (tasks.has(task)) {
        tasks.set(task, false);
    }
}

/**
 * 項目を削除する
 * @param {string} task
 */
function del(task) {
    tasks.delete(task);
}

module.exports = { todo, list, done, doneList, undone, del };


// package.jsonファイルの説明、配列にオブジェクトも書ける。
// { 
//     "array": [
//         1,
//         2,
//         3,
//         4
//       ],
//       "object": {
//         "name": "rey",
//         "age": "17"
//       }
// }