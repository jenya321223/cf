
function getUsers(){return JSON.parse(localStorage.getItem('cz_users')||'[]')}
function saveUsers(u){localStorage.setItem('cz_users',JSON.stringify(u))}
function currentUser(){return localStorage.getItem('cz_current_user')}
function setCurrentUser(u){localStorage.setItem('cz_current_user',u)}
function getBookings(){return JSON.parse(localStorage.getItem('cz_bookings')||'[]')}
function saveBookings(x){localStorage.setItem('cz_bookings',JSON.stringify(x))}
function getOrders(){return JSON.parse(localStorage.getItem('cz_orders')||'[]')}
function saveOrders(x){localStorage.setItem('cz_orders',JSON.stringify(x))}
function logout(){localStorage.removeItem('cz_current_user');location.href='login.html'}
function requireLogin(){if(!currentUser()){alert('Сначала войдите в аккаунт.');location.href='login.html';return false}return true}
function showUser(){
 const el=document.getElementById('userInfo'); if(!el)return;
 const u=currentUser();
 if(u) el.innerHTML=`Вы вошли как <b>${u}</b> <button class="btn danger" onclick="logout()">Выйти</button>`;
 else el.innerHTML=`Вы не вошли. <a class="btn" href="login.html">Войти</a>`;
}
document.addEventListener('DOMContentLoaded',showUser);
