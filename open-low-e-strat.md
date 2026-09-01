<div class="prose-page">

<ArticleHeader icon="🎸" title="The note that breaks the amp: the open low E on a Stratocaster" subtitle="Why the thickest string, played open through the neck pickup, sounds broken instead of saturated — and why the fix is almost always a screwdriver." meta="Studio Notebooks · Instrument Physics | Main St Audio Labs" />

## 🔊 1. The symptom everyone knows

You have the amp exactly where you want it. Chords are fat, notes up the neck sing, the pick responds. Then you hit the **open low E** on the neck pickup, and suddenly that isn't distortion any more: it's a noise.

It hits hard, it congeals, it sounds *broken*. Not saturated — broken. And a second later it starts to warble, as if the note were fighting itself.

It isn't your amp and it isn't your technique. It's the worst possible combination of four things happening at once, and three of them are guitar physics, not amp behaviour.

---

## 💪 2. It is the most violent note on the instrument

The open low E has the **whole** string vibrating: 648 mm on a Fender scale, with no finger shortening it and no finger damping it. Longest length, greatest mass, largest excursion on the entire instrument.

Which means its **attack transient is the biggest one your amplifier will ever see**. Every fretted note has a finger stealing energy from it; this one has nothing. The preamp, comfortable with everything else you played, suddenly swallows a peak several decibels larger.

Add that it is also the lowest note: its **82.4 Hz** fundamental arrives at the nonlinear stage with enormous amplitude. Hold on to that number — it comes back in section 5.

---

## 📐 3. The geometry: the harmonic the neck pickup cannot see

Here is the part almost nobody has in mind.

A guitar pickup does not hear the whole string: it hears **the exact point where it sits**. And at every point along the string, each harmonic has a different amplitude. Where a harmonic has a node — a point that does not move — the pickup simply **cannot sense it**.

On a Stratocaster the neck pickup sits roughly 163 mm from the bridge. On a 648 mm scale that is **exactly one quarter of the string length**. And one quarter of the way along is where the fourth harmonic has its node.

<img src="/open-low-e-diagram.svg" alt="The neck pickup sits exactly on the node of the fourth harmonic" style="width:100%;max-width:620px;display:block;margin:1.5rem auto;border:1px solid var(--vp-c-border);border-radius:8px;" />

```text
   BRIDGE                                                            NUT
     │                                                                │
     │◄──── 1/4 of the length ────►│                                  │
     │                             │                                  │
     │      [ NECK PICKUP ]        │                                  │
     └─────────────────────────────┴──────────────────────────────────┘

   How much of each harmonic of the open low E (82.4 Hz)
   the neck pickup actually senses:

     harmonic    frequency     how much it senses
     ────────    ──────────    ─────────────────────────────
        1          82.4 Hz     ██████████████         0.71
        2         164.8 Hz     ████████████████████   1.00
        3         247.2 Hz     ██████████████         0.71
        4         329.6 Hz     ·············· NOTHING 0.00   ◄── silence
        5         412.0 Hz     ██████████████         0.71
        6         494.5 Hz     ████████████████████   1.00
        7         576.9 Hz     ██████████████         0.71
        8         659.3 Hz     ·············· NOTHING 0.00   ◄── silence
```

So the neck pickup delivers a spectrum **with holes in it**: strong fundamental, huge second, strong third, **nothing at 329.6 Hz**, strong fifth, huge sixth, **nothing at 659.3 Hz**.

That odd distribution is not a design flaw — it is exactly what gives the neck pickup its round, vocal character, and it is why the position sounds so good clean. But feed it into a nonlinear stage and it becomes a problem.

---

## ⚡ 4. And on top of it, the single-coil spike

A Stratocaster single coil has roughly 2.3 henries of inductance. Together with the 500 to 700 picofarads a normal guitar cable contributes, that forms a resonant circuit that **peaks somewhere around 3 to 4 kHz**.

That peak is the Strat's signature brightness, the thing that makes it cut through a mix. But it also means the pick attack — already the biggest on the instrument — reaches the amplifier **with a sharp spike riding on top of a huge low end**.

Enormous bass and a needle of treble, together, in the same instant.

---

## 🌀 5. Why it sounds "broken" and not "saturated"

This is where the previous three converge.

A saturating amplifier does not merely clip: it **creates new frequencies**. It creates harmonics, which are multiples of what went in and sound musical, and it creates **intermodulation**, which is the sums and differences between everything that arrives at the same time. Intermodulation is not musical: it lands on frequencies that bear no harmonic relationship to the note.

And how much intermodulation you get depends on **how much high-amplitude low-frequency energy is present**. A massive 82.4 Hz fundamental, modulating a spectrum full of holes, against a 3.5 kHz treble spike, produces a cloud of sum-and-difference products smeared across the audible band.

That is what your ear reads as *broken*. It isn't more distortion — it's **inharmonic** distortion. It's the difference between a saturated chord that sounds big and a saturated chord with a strange buzz in it that belongs to no note at all.

---

## 🔩 6. The most likely culprit, and it takes a screwdriver

All of the above is true, but before you touch the amplifier, try the boring thing — because it solves this nine times out of ten.

**Lower the neck pickup. Especially on the bass side.**

Stratocaster pickups use alnico magnets sitting directly under the strings. That magnet **pulls** on the string. On the thin strings the force is negligible, but the low E has the most ferromagnetic mass and the largest swing: there, the pull fights the vibration.

The result has its own name: **wolf tone**. The note warbles, loses sustain, drifts in pitch while it rings, and the attack turns grainy. It sounds exactly as if it were breaking — because in a sense it is: the string isn't vibrating freely, it's vibrating against a magnet.

Fender specifies more clearance on the bass side precisely because of this. As a starting point, **with the last fret held down**, leave around 3 mm between the string and the pole piece on the bass side, and about 2 mm on the treble side. Exact figures vary by pickup model, so trim by ear: lower it half a turn at a time until the warble goes away.

If lowering it makes the problem disappear, that was it. And it was neither your amp nor your plugin.

---

## 🎛️ 7. What to do, in order

1. **Lower the neck pickup**, bass side first. It's free, and it's the most common cause.
2. **Roll the guitar volume back a quarter turn.** Single coils clean up enormously with very little — considerably more than a humbucker, because their impedance interacts differently with the load.
3. **Pick a little closer to the bridge.** You change the excitation point and with it how energy is shared among harmonics: you hand the amplifier less fundamental.
4. **Cut the low mids.** Around **240 Hz** is the spot. And that is no coincidence: that scoop is exactly what the Mark I graphic EQ uses to stop low notes turning to mud. Half the reason Mesa's famous *V scoop* exists is this.
5. **Only then, turn the gain down.** It's the last resort, not the first: start here and you lose the sound you wanted without fixing the cause.

---

## 🎯 8. A note on modelling

While we were calibrating **TattooYou**, this phenomenon showed up exactly as it does on the real amplifier: Crunch channel, neck pickup, open low E, same harsh noise.

The temptation is to treat it as a defect and smooth it out. But a model that sounds pleasant with absolutely everything is a model that **averaged too much**. Real amplifiers have ugly notes, have places where they congeal, and have guitar-and-position combinations that simply do not work. That is not noise in the data: that is the instrument.

A Mark I with a Strat on the neck pickup and the sixth string open sounds like this. If the model did not reproduce it, it would be lying.

---

## 🖐️ 9. The happy ending: Keith and the five strings

There is a lovely footnote to all of this.

Keith Richards, who recorded *Some Girls*, *Emotional Rescue* and *Tattoo You* with these very amplifiers, ended up playing in **open G with five strings**: G–D–G–B–D. He removed the sixth string from the guitar. Took it off entirely.

His stated reason was musical — in open G that string was redundant and muddied his chords — and his own summary beats any technical explanation: *"five strings, three notes, two fingers and one asshole."*

But look at what that means: **"Start Me Up" was recorded without that string.** The most recognisable riff on the album *Tattoo You* does not contain the note we just spent nine sections explaining.

Keith may have reached the same conclusion you did, only with a pair of pliers and a forty-year head start.

---

👉 [**How Keith Richards adopted Mesa/Boogie amplifiers (1978–1981) →**](/history-mesa-stones)

</div>
