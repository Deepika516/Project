=> dependent dropdown
For this i need to 1st show all the departments and bind its value ,
then i need to show all the doctors depends upon departments 
for that i need to apply filter on departments value and doc dept id

steps 
1. make a service n call get method for departments.
now in the component call the get method to show all the departments.
now in view i need to bind the id and name too

2. now need to  make a onSelect() in this i need to pass the department
then i need to cann getDoc method from service n filter the data with department.target.value


 