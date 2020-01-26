/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Loading from "./UI_Loading";
import UI_TestWind from "./UI_TestWind";
import UI_BtnIcon from "./UI_BtnIcon";

export default class LoadingBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Loading.URL, UI_Loading);
		fgui.UIObjectFactory.setExtension(UI_TestWind.URL, UI_TestWind);
		fgui.UIObjectFactory.setExtension(UI_BtnIcon.URL, UI_BtnIcon);
	}
}