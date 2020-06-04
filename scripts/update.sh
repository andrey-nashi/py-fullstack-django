#-----------------------------------------------------------------------------------------------
#---- Migrations are Django's way of propagating changes made to models into the database schema
#---- Type of migrations
#---- * migrate -- applying and unapplying migrations.
#---- * makemigrations -- create new migrations based on the changes made to models.
#---- * sqlmigrate -- display the SQL statements for a migration
#---- * showmigrations - lists a project's migrations and their status
#-----------------------------------------------------------------------------------------------

#---- 1. Version and stage changes
python3 ../backend/manage.py makemigrations
#---- 2. Apply changes to the database
python3 ../backend/manage.py migrate
#---- 3. Create a data migration file
#python3 ../backend/manage.py makemigrations --empty --name students students