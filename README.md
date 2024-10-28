Made a simple app using express 

```
const app = express()

app.listen(8000, () => {
console.log('Server is up and running at port:8000')
})
```

Then try to send HTML via the res(if you want to see where the problem is😜)

Or straight dive into the solution that can solve the problem of sending html from the backend with a charm.

Solution is EJS

First install the ejs package using the command 
```
npm install ejs
```

Make a views folder and then inside that make one ejs file(in my case home.ejs)
