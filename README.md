## lectureScheduler module project


## project details 
(created using MERN stack)

setup Backend
```
create a mongodb atlas-cluster get the connection string,
create a .env file and save the MONGODB_URI
npm install
npm start


(thats it)
```
admin api routes(just for reference): 
```
/admin/login
/admin/add-course
/admin/add-lectures
/admin/courses
```


to setup frontend 
```
npm install
npm start
```
page structre
```
login(admin || instructor)
admin: 1)add course
       2)add lectures
instructor: see assigned lectures.
```

admin credentials
```
"name":"Brave",
"password":"Pass@123"
```

instructor credentials
```
"name":"Instructor1",
"password":"Password1"
there are 5 instructors change the number at the end(1-5)
```

sample data is stored somewhere in the repo.




screenshots 
### 1. admin or instructor login
![image](https://github.com/SKstudies/ideamagix-test-project/assets/90096320/6d5304ea-c81b-4337-8b7c-19b53452fc02)




.
### 2. admin page
![image](https://github.com/SKstudies/ideamagix-test-project/assets/90096320/3bfa8e4b-0a29-4ea1-b8de-670274875f33)






.
### 3. add course
![image](https://github.com/SKstudies/ideamagix-test-project/assets/90096320/4caf9e18-e537-4931-8f94-1f56203a224c)





.
### 4. add multiple lectures to any course by entering instructro and date.
![image](https://github.com/SKstudies/ideamagix-test-project/assets/90096320/64e2802d-4cc9-4972-9e56-23bbc6ed3084)



.
### 5. conflicting lectures.
![image](https://github.com/SKstudies/ideamagix-test-project/assets/90096320/38e82c13-5155-4687-ac31-1fd929cefae5)




.
### 6. instructor page to view assigned dates
![image](https://github.com/SKstudies/ideamagix-test-project/assets/90096320/924f2996-74fb-4ffa-98ce-7df1c66837c8)

































