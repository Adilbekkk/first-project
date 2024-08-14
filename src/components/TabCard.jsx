import { ActionIcon, MantineProvider } from "@mantine/core";
import { IconAccessPoint, IconPhotoMinus } from "@tabler/icons-react";
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings,IconKarate } from '@tabler/icons-react';


export default function Tabcard() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    
    <Tabs  color="grey" variant="pills" orientation="vertical" defaultValue="rage">
      
      <Tabs.List>
        <Tabs.Tab value="rage" leftSection={<IconKarate style={iconStyle} />}>
          Rage
        </Tabs.Tab>
        <Tabs.Tab value="speed" leftSection={<IconKarate style={iconStyle}/>}>
          Speed
        </Tabs.Tab>
        <Tabs.Tab value="power" leftSection={<IconKarate style={iconStyle} />}>
          Power
        </Tabs.Tab>
        <Tabs.Tab value="combination" leftSection={<IconKarate style={iconStyle}/>}>
          Combination
        </Tabs.Tab>
        <Tabs.Tab value="defence" leftSection={<IconKarate style={iconStyle}/>}>
          Defence
        </Tabs.Tab>
        <Tabs.Tab value="rythm" leftSection={<IconKarate style={iconStyle}/>}>
          Rythm
        </Tabs.Tab>
        <Tabs.Tab value="strength" leftSection={<IconKarate style={iconStyle}/>}>
          Strength
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel w={350} value="rage">
      <img width={350} src="/mikee.jpg" alt="Example Image"/>
       Mike Tyson
      </Tabs.Panel>

      <Tabs.Panel w={350} value="speed">
      <img width={350} height={450} src="/ali.jpg" alt="Guy"/>
        Muhammad Ali
      </Tabs.Panel>

      <Tabs.Panel w={350} value="power">
        <img width={350} height={450} src="foreman.jpg" alt="George Foreman" />
        George Foreman
      </Tabs.Panel>

      <Tabs.Panel w={350} value="combination">
        <img width={350} height={450} src="manny.jpg" alt="manny" />
        Manny Packquiao
      </Tabs.Panel>

      <Tabs.Panel w={350} value="defence">
        <img width={350} height={450} src="floyd.jpg" alt="Floyd Mayweather" />
        Floyd Mayweather
      </Tabs.Panel>

      <Tabs.Panel w={350} value="rythm">
        <img width={350} height={450} src="gena.jpg" alt="gena" />
        Gennadi Golovkin
      </Tabs.Panel>

      <Tabs.Panel w={350} value="strength">
        <img width={350} height={450} src="canelo.jpg" alt="canelo" />
        Canelo Alvarez
      </Tabs.Panel>
    </Tabs>
   
    
  );
}