---
title: 'Steam Deck Savior: Fixing MTools Translation Errors for NW.js RPGs Running on Proton'
date: 2024-12-08
permalink: /posts/2024/12/steamdeck-nwjs/
author_profile: false
tags:
  - Steam Deck
  - Proton
  - Linux
  - Game
lang: en
other_lang: /zh/posts/2024/12/steamdeck-nwjs/
---

> Before you read this, please note that this article is originally posted on [Bilibili](https://www.bilibili.com/opus/1008510169969065984), and I used DeepSeek V3 to rewrite it.

Hey there, fellow Steam Deck RPG enthusiasts! Ever tried using **MTools** to translate your favorite Japanese RPGs, only to be greeted by the dreaded **"Failed to initialize graphics"** error? Don’t worry—you’re not alone. Today, we’re cracking this annoying issue wide open.  

## **The Problem: Why Won’t MTools Play Nice?**  

Normally, **Steam Deck + Proton** is a match made in gaming heaven, effortlessly running MTools for RPG translations. But recently, some **NW.js-based games** (you know, the ones with that black hexagon compass logo for `Game.exe`) have been acting up. After some detective work, I found two main culprits:  

1. **Non-English file paths** (Linux isn’t a fan of kanji or Cyrillic in directory names)  
2. **Launch order shenanigans** (MTools needs to inject *after* the game starts, not before)  

## **The Fix: A Foolproof Step-by-Step Guide**  

### **Step 1: Enter "Desktop Mode" (AKA Linux Wizardry)**  
First, switch to **Desktop Mode**—think of it as putting on your tech-savvy wizard robe. Make sure your game’s folder path is **entirely in English**. Non-English paths in Linux are like trying to order pizza in Klingon—it just confuses everyone.  

### **Step 2: Create a Magic Launch Script**  
Inside your game folder (where `Game.exe` lives), create a new **.bat file** (let’s call it `start.bat`) with this sorcery:  

```bat
@echo off  
start "" "Game.exe"          # Launches the game  
timeout /t 3 /nobreak >nul  # Waits 3 sec (let the game warm up)  
start "" "./Tool/nw.exe"    # Then summons MTools  
```  

> **Pro Tip:** If there’s no `Tool` folder, launch MTools manually first and select **"Copy tool to game"**—it’ll set up shop like a helpful little gremlin.  

### **Step 3: Teach Steam Some New Tricks**  
1. Add `Game.exe` to your Steam library.  
2. Right-click the game → **Properties** → **Compatibility** → Force **Proton 9.0** (or whatever works best).  
3. Change the launch target to your `start.bat` file (remember: **English paths only!**).  

⚠️ **Critical Warning:** If your path has **spaces**, **wrap it in quotes!** Steam has a weird quirk—right-click adding games auto-quotes paths, but manual browsing doesn’t. Classic Linux jank.  

### **Step 4: Launch Like a Pro**  
1. Run the game—you should see **both the game and MTools** open.  
2. In MTools:  
   - Uncheck **"Compact UI"** (it’s like opening a Swiss Army knife fully).  
   - Drag & drop the game file into MTools.  
   - Check **"Inject into running game"** (this is the secret sauce!).  
   - Hit **"Start Translation"**.  

If all goes well, your game should now display **beautiful, readable text**—like finally getting subtitles for that anime you’ve been watching raw.  

### **Bonus Fixes for Stubborn Games**  
If it still refuses to cooperate, try these **nuclear options**:  
1. In **game Properties → Launch Options**, add:  
   ```
   LANG=zh_CN.UTF-8 %command%
   ```  
2. Install **unifont smooth** (open the `.ttf` in Desktop Mode → Install for "Personal").  

## **Future Launches: Speedrunner Edition**  
Once set up, you can streamline the process:  
1. Launch via Steam (using the `.bat`).  
2. Open MTools from your game library.  
3. If in Gaming Mode, press the **Steam button** to switch windows—like flipping channels on a TV.  

This method also works on **other Linux + Proton setups**, so spread the word! Now go enjoy those previously untranslated RPGs—because nothing beats playing a great story in a language you actually understand.  

(Well, except maybe **free Steam Decks**. But we can’t help you with that.) 🚀