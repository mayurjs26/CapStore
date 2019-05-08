import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OptionpageComponent } from "./optionpage/optionpage.component";

const routes: Routes = [
  { path: "", redirectTo: "options", pathMatch: "full" },
  { path: "options", component: OptionpageComponent, pathMatch: "full" },
  { path: "**", redirectTo: "options", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
