/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_BtnIcon extends fgui.GButton {

	public m_icon:fgui.GLoader;

	public static URL:string = "ui://pax4wxkou3qf9";

	public static createInstance():UI_BtnIcon {
		return <UI_BtnIcon>(fgui.UIPackage.createObject("Loading","BtnIcon"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}