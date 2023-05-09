# Backend For TODO-List!

REST APIs  for  Tasks and Users

link :- [https://mytodolist-vuuf.onrender.com/](https://mytodolist-vuuf.onrender.com/)



## End Points For User APIs

### Create User-----------
***POST Method***      
/api/v1/user/new" 

{
	"name":"githubni3",
	"email":"saxena@gmail.com",
	"password":"password"
}

### Login User-----------
***POST Method***      
/api/v1/user/login" 

{
	"email":"saxena@gmail.com",
	"password":"password"
}

### Get User Details------------
***GET Method***      
/api/v1/user/profile" 

### Logout User------------
***GET Method***      
/api/v1/user/logout" 



## End Points For Task APIs

### Create Task-----------
***POST Method***      
/api/v1/task/new" 

{
	"title":"This is Task Title",
	"description":"This is my new task",
}

### Get User's All Tasks-----------
***GET Method***      
/api/v1/task/mytask" 

### Update task If it is completed------------
***PUT Method***      
/api/v1/task/{task_id}" 

### Delete Task------------
***DELETE Method***      
/api/v1/task/{task_id}" 
