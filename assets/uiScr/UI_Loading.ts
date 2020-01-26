/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnIcon from "./UI_BtnIcon";

export default class UI_Loading extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_BtnTest:UI_BtnIcon;
	public m_n4:fgui.GTextField;
	public m_BtnTest2:UI_BtnIcon;

	public static URL:string = "ui://pax4wxkou3qf7";

	public static createInstance():UI_Loading {
		return <UI_Loading>(fgui.UIPackage.createObject("Loading","Loading"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_n0 = <fgui.GImage>(this.getChildAt(0));
		this.m_BtnTest = <UI_BtnIcon>(this.getChildAt(1));
		this.m_n4 = <fgui.GTextField>(this.getChildAt(2));
		this.m_BtnTest2 = <UI_BtnIcon>(this.getChildAt(3));
	}
}