# This is Design Distribution Version of [NETDEVV.COM](https://www.netdevv.com)

* CURRENT VERSION : 1.0.0
* DEV VERSION: 2.0.0

## Installation Process::
* Install node js on your computer globally
*     git clone https://github.com/smitpatelx/netdevv-dist.git project01
*     cd project01
*     npm install
*     gupl build
*     gulp serve
* Open any browser and go to [localhost port 5050](http://localhost:5050)


## File Structure::
		(master)
		├───dist
		├───package.json
		├───package-lock.json
		├───gulpfile.js
		├───README.md
		├───LICENCE
		│   ├───fonts
		│   ├───images
		│   │   └───svg
		│   ├───scripts
		│   ├───styles
		│   ├───video
		│   └───index.html
		└───src
		    ├───scripts
		    │   └───vendors
		    │       ├───bootstrap
		    │       ├───foundation
		    │       ├───jquery
		    │       └───splitting
		    ├───styles
		    │   ├───00-plugins
		    │   │   ├───bootstrap
		    │   │   ├───foundation
		    │   │   └───splitting
		    │   ├───01-helpers
		    │   ├───02-base
		    │   ├───03-layout
		    │   ├───04-modules
		    │   ├───05-templates
		    │   └───06-global-components
		    └───views
		        └───index.html
