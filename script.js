import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyATT80hd_95QeEg5Ck7GISAyh0G8XDFWZU",
  authDomain: "learnfirebase-ba204.firebaseapp.com",
  databaseURL: "https://learnfirebase-ba204-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learnfirebase-ba204",
  storageBucket: "learnfirebase-ba204.appspot.com",
  messagingSenderId: "980786321135",
  appId: "1:980786321135:web:5221b0e8c3fd9f45562d1a"
};

// khoi tao database
const app = initializeApp(firebaseConfig);
const db = getDatabase()

//them moi ban ghi
const buttonCreate = document.querySelector("#button-create")
const createUser = (Id, fullName, email) => {
  set(ref(db,'users/' + Id),{
    fullName: fullName,
    email : email
  })}
buttonCreate.addEventListener("click", ()=>{
    createUserAuto("CaoDinhNhat","cdn2210@gmail.com")
    createUserAuto("CaoDinhNhat","cdn2210@gmail.com")
    createUserAuto("CaoDinhNhat","cdn2210@gmail.com")
})
// tu dong sinh id them moi ban ghi
const createUserAuto = (fullName, email) => {
  set(push(ref(db,'users')),{
    fullName: fullName,
    email: email,
  })
}
// lay danh sach ban ghi
onValue(ref(db,'users'), (snapshot) => {
  let htmls = ""
  snapshot.forEach((snapshotchild)=>{
    const childkey = snapshotchild.key;
    const childData = snapshotchild.val();
    htmls += 
  `
  <li>${childkey}: ${childData.fullName} - ${childData.email}</li>
  `
  console.log(htmls)
  })
  const ul = document.querySelector("#list-user")
  ul.innerHTML = htmls
  
})


// cap nhat ban ghi
const UpdateUser = (id, fullName, email) => {
  update(set(db,'users/' + id),{
    fullName: fullName,
    email:email,
  });
}

const buttonUpdate = document.querySelector("#button-update")
buttonUpdate.addEventListener("click",()=> {
  UpdateUser("1", " ", " ")
})