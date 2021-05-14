import { HeaderComponent } from "./components/header.component";
import { NavigationComponent } from "./components/navigation.component";
import { CreateComponent } from "./components/create.component";
import { FavoriteComponent } from "./components/favorite.component";
import { PostsComponent } from "./components/posts.component";
import { LoaderComponent } from "./components/loader.component";
import "./styles.css";
import {SearchComponent} from "./components/search.component";

new SearchComponent("search-posts");
new HeaderComponent("header");

const navigation = new NavigationComponent("navigation");
const posts = new PostsComponent("posts");
const create = new CreateComponent("create");
const favorite = new FavoriteComponent("favorite");


export const loader = new LoaderComponent("js-loader");

navigation.registerTabs([
  { name: "create", component: create },
  { name: "posts", component: posts },
  { name: "favorite", component: favorite },
]);
