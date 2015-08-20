
# JavaScript is a Universal Language

When it comes to web development JavaScript is everywhere you need it to be:

* On the front-end browser for user interactions
* On the back-end server for responding to data requests
* On the command-line for automating tasks

This article is dedicated to showing you around JavaScript. If you’re new to the language you’ll surely gain inspiration for why you want to learn it and how you can apply it. Veteran coders will likely pick up one or two techniques by the end of this article.

# Accompanying Article

Find the [companion article on my blog](http://blog.katworksgames.com/2015/08/18/delighting-in-javascript-with-fizzbuzz/). 

It offers commentary on the individual files as I walk through how to use them, and why some of the code is signifncant.  

# Running the Programs

### Client-Side
Open `client\index.html` in a web browser. Type a number into the entry-field and press the button. You'll see FizzBuzz output.

Open the browser developer tools and the console. Access the logic directly by calling the function entering `CalculateFizzBuzz(41)`

### Server-Side
Open a Terminal window, change into the repo folder `server` and run it entering the command `node app.js` to launch it. Open a web browser and hit it like this  `127.0.0.1:8080` seeing its default FizzBuzz output.

Try it again giving the URL a number on its route to exercise logic in additional ways. For example `127.0.0.1:8080/42` seeing how the behavior changes.

### Command-Line
Open a Terminal window, change into the repo folder `command_line` and run it entering the command `node fizzbuzz.js 42` to see the logic print out results given an argument.

Run it again `node fizzbuzz.js config.json` seeing the logic print our results given a configuration file formatted in JSON.

In both ocassions an output is written called `fizz_buzz_results.json` containing all results from the fizzbuzz calculations.

# Further Info
* Reach out to me on Twitter [@KenTabor](https://twitter.com/KenTabor)
* See what's coming in the [next JavaScript](https://github.com/lukehoban/es6features)
* Learn JavaScript on [Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming)
* Read the [companion article](http://blog.katworksgames.com/2015/08/18/delighting-in-javascript-with-fizzbuzz/). 
* Get my book [Hammering Websites Into Shape](http://www.hammeringresponsivewebdesign.com/)

Please share this repo and the accompanying article with those who will benefit.