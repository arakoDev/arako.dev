---
title: "MrDialogue"
summary: "An open-source Roblox dialogue package for building secure, branching conversations with a ready-to-use interface or a custom UI."
categories:
  - "open-source"
  - "tool"
heroImage: "./hero.jpg"
heroAlt: "A Roblox Studio playtest showing the MrDialogue interface during a conversation with an NPC."
heroVideo: "https://www.youtube.com/watch?v=NQ5bXA1-yWE"
videoUploadDate: "2026-08-02"
heroCaption: "A dialogue running with MrDialogue's bundled interface in Roblox Studio."
featuredOrder: 1
draft: false
outcome: "A documented, MIT-licensed package that developers can install through Wally or the Roblox Creator Store and adapt to their own experiences."
links:
  - type: "documentation"
    url: "https://mrdialogue.arako.dev/"
  - type: "source"
    url: "https://github.com/arakoDev/MrDialogue"
    label: "View on GitHub"
  - type: "roblox-page"
    url: "https://create.roblox.com/store/asset/105201219018918/MrDialogue-v100"
    label: "Get on Creator Store"
  - type: "demo"
    url: "https://www.youtube.com/watch?v=NQ5bXA1-yWE"
    label: "Watch showcase"
---

## Conversations as data

MrDialogue models each conversation as a directed graph of line, choice, branch, action, and end nodes. Paths can split, merge, skip steps, and reuse outcomes, making the same format useful for anything from a short NPC exchange to a stateful quest conversation.

## Server-authoritative runtime

Dialogue state, conditions, actions, and choice validation stay on the server. Available options are checked before they are shown and checked again when selected, while the client receives only the presentation data it needs. Definitions use strict Luau types and are validated before a session starts.

## A flexible player interface

The bundled UI includes typewriter text, speaker portraits, animated choice panels, and mouse, keyboard, touch, and gamepad input. Developers can configure it, provide a compatible `ScreenGui`, or replace the presentation layer with a custom adapter while keeping the same server runtime.

## Built for real projects

- Install through Wally or the Roblox Creator Store.
- Define reusable speakers and emotions for dialogue lines and prompts.
- Connect game-specific conditions and synchronous actions to the graph.
- Run an independent, observable session for each player.
- Inspect completion results and handle cancellations, timeouts, and client errors.
- Follow dedicated guides, examples, API references, and troubleshooting notes.
