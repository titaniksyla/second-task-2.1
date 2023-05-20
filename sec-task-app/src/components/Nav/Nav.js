import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Nav.css";
import Domains from "../tabs/Domains";
import Webhosting from "../tabs/Webhosting";
import Dedicatedservers from "../tabs/Dedicatedservers";
import Virtualcloudservers from "../tabs/Virtualcloudservers";
import Emailhosting from "../tabs/Emailhosting";
import Freehosting from "../tabs/Freehosting";
import Wordpresshosting from "../tabs/Wordpresshosting";
import Vpshostingservers from "../tabs/Vpshostingservers";

const Nav = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Domains</Tab>
        <Tab>Web Hosting</Tab>
        <Tab>Dedicated Servers</Tab>
        <Tab>Virtual Cloud Servers</Tab>
        <Tab>WordPress Hosting</Tab>
        <Tab>Email Hosting</Tab>
        <Tab>VPS Hosting Servers</Tab>
        <Tab>Free Hosting</Tab>
      </TabList>

      <TabPanel>
        <Domains />
      </TabPanel>

      <TabPanel>
        <Webhosting />
      </TabPanel>

      <TabPanel>
        <Dedicatedservers />
      </TabPanel>

      <TabPanel>
        <Virtualcloudservers />
      </TabPanel>

      <TabPanel>
        <Wordpresshosting />
      </TabPanel>

      <TabPanel>
        <Emailhosting />
      </TabPanel>

      <TabPanel>
        <Vpshostingservers />
      </TabPanel>

      <TabPanel>
        <Freehosting />
      </TabPanel>
    </Tabs>
  );
};

export default Nav;
