(ns square.core
  ( :use  compojure.core
          ring.middleware.resource  
          ring.middleware.json
          ring.util.response
          [monger.collection :only [insert]])
  (:require 
   [compojure.route :as route]
   [compojure.handler :as handler]
   [square.service.issue :as issue])
  )

(defn handler [request]
  (prn "request is" request)
  (prn (get-in request [:body "user"]))
  (response "Uploaded user."))
(defn issue-put [request]
  (let [ obj (:body request)]
    (prn "salam " obj)
    (insert "projects" obj ))
  (response "OK"))


(defroutes main-routes
  (GET "/" [] "<h1>Hello World Wide Web!</h1>")
  (GET "/junk" [req] handler)
  (POST "/junk" [req] handler )
  (PUT "/issue" [req] issue-put)
  (route/resources "/")
  (route/not-found "Page not found"))


(def app
  (-> main-routes wrap-json-body handler/site))