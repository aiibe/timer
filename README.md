## Pomoto - A minimal Pomodoro timer built with Electron and React

A straightforward timer implementing the renowned Pomodoro technique, developed using React and Electron.

Try it out : https://aiibe.github.io/pomoto/

Download desktop app : https://github.com/aiibe/pomoto/releases

#### Install

```
git clone https://github.com/aiibe/pomoto.git
cd pomoto
npm install
```

### Development in-browser

```
npm start
```

### Development with Electron

```
npm run electron-dev
```

### Build as Electron Application

First, let Parcel bundle the app in `build` directory using

```
npm run build
```

Then build a local executable app to check if everything is working fine with

```
npm run electron
```

Ready for release and distribution ? Let's pack it up for Linux and Mac

```
npm run electron-build
```

🎉 Congrats! Check out `dist` directory to see the application built for different platforms

<em>To configure for other platforms, check [Electron Builder](https://www.electron.build/index.html)</em>

### Deploy as Single Page App on GitHub Pages

Required : Make sure in Github settings/pages 'Build and deployment' the branch is set to `master` and is built from `/docs`

Run on master branch

```
npm run deploy:gh-pages
git add .
git commit -m 'deploy new version'
git push
```

Done ! The updated version will be deployed in a minute or two.

#### Known issues

- Alarm sound is not working on Safari (see issue Webkit disable autoplay).
- If an error `Cannot find module '..'` occured, open up `.parcelrc` file and hit save.

#### Story

Hi, my name is Souk from Lyon, France.

I created Pomoto both for my personal use and as a valuable addition to my portfolio. As any developer understands, it's easy to lose track of time when immersed in coding. If you're familiar with the Pomodoro technique, which encourages short breaks every 25 minutes to avoid prolonged focus on a single task, you'll appreciate its effectiveness. With numerous Pomodoro apps available online, I began to ponder the challenge of creating one myself, and that's when I decided to take it on.
