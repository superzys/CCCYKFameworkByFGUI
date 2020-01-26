import { BaseUI, UIMgr } from "../YK/core/UIMgr/UIMgr"
import { EventData } from "../YK/core/EventMgr/DispatchEventNode"
import { TestWind } from "./TestWind"
import UI_Loading from "../../FGUI/build/Loading/UI_Loading"

export class LoadingWind extends BaseUI
{
    protected packName = "Loading"
    protected resName = "Loading"
    protected uiType = UI_Loading;
    protected ui:UI_Loading;
    public modal: boolean = false
    public dontDel: boolean = true
    protected btnNameStartsWith: string = "Btn"
    protected isNeedShowAnimation: boolean = false
    protected isNeedHideAnimation: boolean = false


    protected OnInitWind()
    {
        this.ui = this.contentPane as UI_Loading;
        // this.mlabelProgress = this.UIObj.get("labelProgress")
        // this.mlablMsg = this.UIObj.get("lablMsg")
        // this.mlabelProgress.text = "0%"

    }

    protected OnShowWind()
    {
        // this.eventMgr.addUIEvent(LoadingProgressEvenet.EventID)

        // this.mProgress = 0
        // this.mShowInfoString = "正在加载..."
        // this.mlabelProgress.text = this.mProgress.toFixed() + "%"
    }

    protected OnHideWind()
    {

    }
    protected OnHandler(ev: EventData)
    {
        // switch (ev.cmd)
        // {
        //     case LoadingProgressEvenet.EventID:
        //         this.RefreshInfo(ev as LoadingProgressEvenet)
        //         break;
        // }
    }

    protected OnBtnClick(ev: fgui.GButton)
    {
        super.OnBtnClick(ev)
        console.log("OnBtnClick="+ev.name)
        if(ev.name == "BtnTest")
        {
            UIMgr.Instance.ShowWind(TestWind)
        }
    }
}