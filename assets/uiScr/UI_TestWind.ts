/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnIcon from "./UI_BtnIcon";

export default class UI_TestWind extends fgui.GComponent {

	public m_n2:fgui.GImage;
	public m_BtnClose:UI_BtnIcon;
	public m_LabelTitle:fgui.GTextField;
	public m_BtnShow:UI_BtnIcon;

	public static URL:string = "ui://pax4wxkou3qf8";

	public static createInstance():UI_TestWind {
		return <UI_TestWind>(fgui.UIPackage.createObject("Loading","TestWind"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_n2 = <fgui.GImage>(this.getChildAt(0));
		this.m_BtnClose = <UI_BtnIcon>(this.getChildAt(1));
		this.m_LabelTitle = <fgui.GTextField>(this.getChildAt(2));
		this.m_BtnShow = <UI_BtnIcon>(this.getChildAt(3));
	}
}