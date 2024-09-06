---
title: Sample
slug: sample
description: "A Sample Page Showcasing the Website's Theme and Design Elements."
date: 2024-00-00T00:00:00+05:30
lastmod: 2024-00-00T00:00:00+05:30
hidden: true
tags:
  - Secret
  - Sample
---


# Headings

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

<!--more-->

# H1

## H2

### H3

#### H4

##### H5

###### H6

# Paragraphs

```markdown
This is a paragraph. // [!code --]
I am still part of the paragraph. // [!code ++]

New paragraph.
```

This is a paragraph.
I am still part of the paragraph.

New paragraph.

# long paragraph

```markdown
Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Must go faster... go, go, go, go, go! Jaguar shark! So tell me - does it really exist? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! I was part of something special.

My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!

Must go faster... go, go, go, go, go! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Must go faster... go, go, go, go, go! Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.

Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.
```

Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Must go faster... go, go, go, go, go! Jaguar shark! So tell me - does it really exist? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! I was part of something special.

My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!

Must go faster... go, go, go, go, go! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Must go faster... go, go, go, go, go! Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.

Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.

# Inline code

This is `Inline code`.

# Image

```markdown
Web Image

![Web Image](https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg)

Local Image

![Local Image](../attachments/Avatar.jpg)
```

Web Image

![Web Image](https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg)

Local Image

![Local Image](../attachments/Avatar.jpg)

# Block Quotes

```markdown
> This is a block quote
```

> This is a block quote

# Code Blocks

````markdown
```javascript
// Fenced **with** highlighting
function doIt() {
    for (var i = 1; i <= slen ; i^^) {
        setTimeout("document.z.textdisplay.value = newMake()", i*300);
        setTimeout("window.status = newMake()", i*300);
    }
}
```
````

```javascript
function doIt() {
    for (var i = 1; i <= slen ; i^^) {
        setTimeout("document.z.textdisplay.value = newMake()", i*300);
        setTimeout("window.status = newMake()", i*300);
    }
}
```

````markdown
```go
// Fenced **without** highlighting
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```
````

```go
// Fenced **with** highlighting
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```


```rust
use std::fs::File;
use std::io::{self, Write};

fn main() -> Result<(), io::Error> {
    // Attempt to create a file
    let mut file = File::create("Hello_World.txt")?;

    // Write "Hello, World!" to the file
    file.write_all(b"Hello, World!")?;

    // Read a line from stdin (just to show some interaction)
    println!("Enter your name:");
    let mut name = String::new();
    io::stdin().read_line(&mut name)?;

    // Greet the user
    let greeting = format!("Hello, {}!", name.trim());
    println!("{}", greeting);

    Ok(())
}
```
# Tables

```markdown
| Colors     |     Fruits      |         Vegetable |
| ---------- | :-------------: | ----------------: |
| Red        |     _Apple_     | [Pepper](#Tables) |
| ~~Orange~~ |     Oranges     |        **Carrot** |
| Green      | ~~**_Pears_**~~ |           Spinach |
```

| Colors     |     Fruits      |         Vegetable |
| ---------- | :-------------: | ----------------: |
| Red        |     _Apple_     | [Pepper](#Tables) |
| ~~Orange~~ |     Oranges     |        **Carrot** |
| Green      | ~~**_Pears_**~~ |           Spinach |

# List Types

#### Ordered List

```markdown
1. First Item
2. Second Item
3. Third Item
```

1. First Item
2. Second Item
3. Third Item

#### Unordered List

```markdown
- First Item
- Second Item
- Third Item
```

- First item
- Second item
- Third item

# Mathematical Equations

```tex
$$
evidence\_{i}=\sum\_{j}W\_{ij}x\_{j}+b\_{i}
$$

$$
AveP = \int_0^1 p(r) dr
$$

When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```

$$
evidence\_{i}=\sum\_{j}W\_{ij}x\_{j}+b\_{i}
$$

$$
AveP = \int_0^1 p(r) dr
$$

When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

#### Emoji

These Are Test Emojis.
:smile:
:see_no_evil:
:smile_cat:
:watermelon:
