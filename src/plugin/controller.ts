import { toDarkColor, toHSL, toLightColor, toRGB01 } from "./util";

figma.showUI(__html__, {width: 1200, height: 325, themeColors: true});

figma.ui.onmessage = (msg) => {

  if (msg.type === 'create_color_variables') {

    const data = msg.data;

    const collections = figma.variables.getLocalVariableCollections();

    const collection = collections.find((c) => c.name === data.collection);

    if(!collection) return figma.notify('Please enter a valid collection name!', {error: true});

    const ids = collection.variableIds;

    if(!ids) return figma.notify(`Variables not found in Collection (${collection.name})`, {error: true});

    const dark = collection.modes.find((m) => m.name.toLowerCase() === 'dark');
    const light = collection.modes.find((m) => m.name.toLowerCase() === 'light');

    if(!dark) return figma.notify('Dark mode not found in Collection, please add Dark Mode in your collection!', {error: true});
    if(!light) return figma.notify('Light mode not found in Collection, please add Light Mode in your collection!', {error: true});

    for(const id of ids) {
      const variable = figma.variables.getVariableById(id);
      if(!variable) continue;
      const [name, shade] = variable.name.split('/');
      switch(name.toLowerCase()) {
        case 'reverse':
          switch(shade.toLowerCase()) {
            case 'default':
              variable.setValueForMode(dark.modeId, toRGB01(toHSL('#FFFFFF')));
              variable.setValueForMode(light.modeId, toRGB01(toHSL('#000000')));
              break;
            case 'foreground':
              variable.setValueForMode(dark.modeId, toRGB01(toHSL('#000000')));
              variable.setValueForMode(light.modeId, toRGB01(toHSL('#FFFFFF')));
              break;
            default:
              variable.setValueForMode(dark.modeId, toDarkColor('#FFFFFF', shade));
              variable.setValueForMode(light.modeId, toLightColor('#000000', shade));
              break;
          }
          break;
        default:
          switch(shade.toLowerCase()) {
            case 'default':
              variable.setValueForMode(dark.modeId, toRGB01(toHSL(data[`${name.toLowerCase()}-dark`])));
              variable.setValueForMode(light.modeId, toRGB01(toHSL(data[`${name.toLowerCase()}-light`])));
              break;
            case 'foreground':
              variable.setValueForMode(dark.modeId, toRGB01(toHSL(data[`${name.toLowerCase()}-dark-foreground`])));
              variable.setValueForMode(light.modeId, toRGB01(toHSL(data[`${name.toLowerCase()}-light-foreground`])));
              break;
            default:
              variable.setValueForMode(dark.modeId, toDarkColor(data[`${name.toLowerCase()}-dark`], shade));
              variable.setValueForMode(light.modeId, toLightColor(data[`${name.toLowerCase()}-light`], shade));
              break;
          }
      }
    }

    figma.notify('All color variables applied successfully')

  }

  figma.closePlugin();
};