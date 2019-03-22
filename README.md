# Re-Frame Blockchain

In this repository you can find some of the code I've used to learn re-frame.

The idea was to build a simplified version of a blockchain, to play around with state and create something that's not a Todo list app.


## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser. 

Hot reloading

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```
