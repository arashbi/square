(defproject square "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
  				 [ring/ring-core "1.1.6"]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [compojure "1.1.5"]
                 [ring/ring-json "0.1.2"]
                 [com.novemberain/monger "1.4.2"]]
  :plugins [[lein-ring "0.7.5"]]
  :ring {:handler square.core/app}
  :test-paths ["test/clojure"]
)
