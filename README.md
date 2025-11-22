# MythicMobs - Image to YAML Code Converter
:ballot_box_with_check: This tool enables more advanced development using the Minecraft plugin “MythicMobs”.
It utilizes MythicMobs' [“Particle Mechanism”](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/skills/mechanics/Particle) to generate code that recreates your uploaded images within the game.



## Technology Stacks

- React 19
- Node.js 23.4.0
- TypeScript
- Vite


# How to Use

1. Access this project's [GitHub Pages](https://tukuyomil032.github.io/MythicMobs-Image-to-yaml-code-converter/)
2. Upload your desired image
3. Set the skill name you want to use for the generated code (skill).
4. Set the resolution. (Determines particle placement frequency)
5. Set the in-game display size. (How many Minecraft blocks the entire image width corresponds to)
6. Set the transparency threshold. (Only pixels more opaque than this value will have particles placed)
7. Set the maximum particle count. (The particle mechanic will not be used beyond this value)
8. Set the particle type. (The particle type used to recreate the image)
9. Press “GENERATE YAML CODE”


## Result

- ✅️ The output result will appear in “Generated MythicMobs YAML”.
- ✅️ Press “COPY TO CLIPBOARD” to copy it to your clipboard.


## :warning:Important Notes:warning:

- Set the “Maximum Particle Count” value with extreme caution. 
**Excessively high values may cause the game or Minecraft server to crash.**
- Your uploaded image will appear in the “Image Preview”.



## License

This project is licensed under the MIT License - see the LICENSE file for details.