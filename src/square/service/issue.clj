(ns square.service.issue
  (:require [monger.core :as mg])
  (:use [ monger.collection :only [insert]]))
(prn "connecting to the database ")
(mg/connect!)
(mg/set-db! (mg/get-db "projects"))
