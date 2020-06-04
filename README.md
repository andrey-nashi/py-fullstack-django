# py-fullstack-django
A full stack web application using Django and React


1. Install 
* Linux: run script scripts/install.sh
* Windows: run the following  
**pip install django djangorestframework django-cors-headers --user**

2. Run
* Linux: run script scripts/run.sh
* Windows:   
   - Start the backend server on port 8080  
   **python ../backend/manage.py runserver 8080**
   - Start the frontend server
   
3. Test
* Access http://127.0.0.1:8080/common/ to check whether Django is working and responses to
HTTP requests
* Access http://127.0.0.1:8080/api/students/ to check whether Django REST service is working
* Access http://127.0.0.1:3000 to open the frontend page
