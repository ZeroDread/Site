# ZeroDread's Shitshow

This repo houses the source code for my personal ~cesspool~ website, built with [Astro](https://astro.build) and deployed using [Bun](https://bun.sh/). It’s hooked up to [Cloudflare Pages](https://pages.cloudflare.com/) because speed matters and, well, I don’t want to deal with slow-ass hosting.

## 🤖 WTF is This?

Welcome to **[ZeroDread.dev](https://ZeroDread.dev)**. This is where I rant, write blog posts about machine learning (yes, I know, how original), and drop some security-related hot takes. If you're into raw, unfiltered tech blabber or just like seeing me verbally destroy dumb coding trends, you're in the right place. Expect the unexpected—and by that I mean expect a dumpster fire of code and sarcasm.

### 🛠 The Shiny Tech Stack (Because Everyone Has One)
- **Astro**: It spits out HTML like a pro and keeps it static. That's all I need.
- **Bun**: Because npm is like waiting for a Windows Update on a 2005 laptop.
- **Cloudflare Pages**: Hosting so fast it makes Google nervous. Also, no servers to babysit.

## 🌟 Features (Buzzword Edition)

- **Fully Responsive Design**: Because who the hell isn't using their phone nowadays?
- **SEO Optimized**: Yeah, sure, like Google's gonna notice. But whatever, it’s optimized.
- **Light/Dark Mode**: It's 2024—of course there's dark mode. If your site still blinds people, you’re an asshole.
- **Blazing Fast™**: Yeah, I said it. It's fast. It’s static HTML, duh.
- **Markdown Blogging**: Because writing HTML by hand is for masochists.
- **Social Icons**: Wanna stalk me? Good luck. Here's a clickable link for the lazy.

## 📂 Directory for the Poor Souls Who Read Code

```bash
/
├── public/             # Static files (because that's where your images live, Karen)
├── src/
│   ├── components/     # Pretentious tiny pieces of UI
│   ├── layouts/        # Basically the "header and footer go here" folder
│   ├── pages/          # Actual content for the site (aka "where the magic happens")
│   └── styles/         # Your CSS drugs
├── astro.config.mjs    # Astro config. Don't touch unless you wanna suffer
├── bunfig.toml         # Bun config. It's small, it's fast, it's cool.
└── package.json        # Do you really care what's in here? Thought so.
```
## 🚀 Deployment Details (Because Maybe You Care?)

### Bun, Baby
This project doesn’t use npm. Thank God. We roll with **Bun**, which is about 1000x faster than npm and doesn’t make me wanna pull my hair out.

1. **Clone the Damn Repo**:

    ```bash
    git clone https://github.com/ZeroDread/Site.git
    ```

2. **Install Dependencies (a.k.a. Bun Doing Its Magic)**:

    ```bash
    cd Site
    bun install
    ```

3. **Fire Up the Local Dev Server**:

    ```bash
    bun run dev
    ```

    Go ahead, open up `http://localhost:3000` and marvel at my chaotic creation.

### Cloudflare Pages - Because It’s Not 2009
The site automatically deploys with Cloudflare Pages every time I push to `main`. Like magic, but without the bullshit.

## 📚 Documentation or Some Shit Like That

### Astro
Astro turns code into static HTML and I like it because it doesn’t get in my way. Check out the [docs](https://docs.astro.build/) if you wanna dive deeper.

### Bun
If you haven’t ditched npm yet, you’re missing out. Bun is the future, and you can get in on the fun [here](https://bun.sh/docs).

### Cloudflare Pages
Global deployment with a few clicks. Check out the official [docs](https://developers.cloudflare.com/pages/) if you need to set it up. Or don't. Who am I to tell you what to do?
