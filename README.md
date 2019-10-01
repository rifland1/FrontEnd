Pour lancer le projet:

ng serve --open

url de test : http://localhost:4200

pour tester l'authentification:  http://localhost:4200/login

ng serve --host localhost --proxy-config proxy.conf.json --base-href /gui/


###################
Configuration Apache 
###################
<VirtualHost *:80>

ProxyPass /api http://localhost:8080/api
ProxyPassReverse /api http://localhost:8080/api


ProxyPass /app http://localhost:4200/app/
ProxyPassReverse /app http://localhost:4200/app/

</VirtualHost>
