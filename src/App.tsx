import "./styles/global.css";
import { MenuItem } from "./components/MeunItem";
import { SideBar } from "./components/SideBar";
import { HeaderContainer } from "./components/Header";
import {Post} from './components/Post'
import { Spacer } from "./components/Spacer";

function App() {
  return (
    <div className="App grid grid-cols-3">
      <div className="w-full pl-20">
        <SideBar isDark={false} />
      </div>
      <div className="w-full">
        <header className="w-full">
          <HeaderContainer isDark={false} twetts="9" isHome={true} />
        </header>
        <Post isDark={false} src="../../src/assets/Profile Picture.svg" />
        <Spacer isDark={false}/>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export { App };
