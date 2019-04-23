# REBLstreamGFX

A [NodeCG](http://github.com/nodecg/nodecg) bundle made for REBL Smash Bros. tournament livestreams. It currently includes graphics for an in-game scoreboard and break screen.

## Screenshots

* [Dashboard](https://i.imgur.com/Y2VjQIS.png)
* [Break screen](https://i.imgur.com/jHE6qPD.png)
* [In-Game scoreboard](https://i.imgur.com/h4DZZRe.jpg)

## Install

1. Install NodeCG and (optionally) [nodecg-cli](https://github.com/nodecg/nodecg-cli).
2. Clone REBLstreamGFX to `nodecg/bundles/REBLstreamGFX` or if you have [NodeCG-cli](https://github.com/nodecg/nodecg-cli) installed, run `nodecg install randomoink/REBLstreamGFX` in NodeCG's install directory.
3. For last.fm integration to work, create the configuration file at `nodecg/cfg/REBLstreamGFX.json`.
It should look something like this, just replace the placeholders with your own information:
```{
	"lastfm": {
		"targetAccount": "Your last.fm account",
		"apiKey": "your API key",
		"secret": "your secret"
	}
}```

## Usage

Start NodeCG. By default, the dashboard can be accessed from `localhost:9090` in your browser.

From the dashboard, URLs to the graphics can be found from the graphics tab. To use them, they should be added as browser sources in a broadcast application such as OBS Studio. The graphics are made to run at a resolution of 1920x1080.

## Credits

REBL Smash Bros. logos (graphics/SmashREBL_ALT-01.png, SmashREBL-01.png) by Huckle#5303 on Discord.

Last.fm extension (extension/lastfm-playing.js) from [toth5-overlay.](https://github.com/TipoftheHats/toth5-overlay)