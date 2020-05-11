import Realm from 'realm';
import moment from 'moment';
export const TODO_SCHEMA = "TodoList";

export const TodoSchema = {
    name : TODO_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'int',
        title:'string',
        subtitle:'string',
        checked: 'bool',
        date:'string'
    }
}

const databaseOptions = {
    path : 'todoApp.realm',
    schema : [TodoSchema],
    schemaVersion:0
}

export const insertNewTodoList = newTodoList => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm =>{
        realm.write(() => {
            realm.create(TODO_SCHEMA,newTodoList);
            resolve(newTodoList);
        })
    }).catch((error) => {reject(error)});
});

export const queryAllTodoList = () => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm =>{
        let allTodoList = realm.objects(TODO_SCHEMA);
        let todoOnthisDay = allTodoList.filtered(`date = "${moment().format("MMMM D, Y")}" SORT(checked ASC)`);
        resolve(todoOnthisDay)
    }).catch((error) => {
        reject(error);
    });
});

export const disableTodo = id => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm =>{
        realm.write(() =>{
            let deletingTodo = realm.objectForPrimaryKey(TODO_SCHEMA,id);
            deletingTodo.checked = true;
            resolve();
        })
    }).catch((error) => {reject(error)});
});

export default new Realm(databaseOptions);