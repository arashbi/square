  (ns square.core
   (:use compojure.core)  
    (:use ring.middleware.resource)  
    (:use ring.middleware.json)
    (:use ring.util.response)
    (:require 
      [compojure.route :as route]
      [compojure.handler :as handler]))

  (defn handler [request]
      (prn "request is" request)
      (prn (get-in request [:body "user"]))
      (response "Uploaded user."))

  (defroutes main-routes
    (GET "/" [] "<h1>Hello World Wide Web!</h1>")
    (GET "/junk" [req] handler)
    (POST "/junk" [req] handler )
    (route/resources "/")
    (route/not-found "Page not found"))


  (def app
     (-> main-routes wrap-json-body handler/site ))