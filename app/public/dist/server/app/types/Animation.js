"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationComplete = exports.AnimationType = void 0;
var AnimationType;
(function (AnimationType) {
    AnimationType["Idle"] = "Idle";
    AnimationType["Walk"] = "Walk";
    AnimationType["Sleep"] = "Sleep";
    AnimationType["Hurt"] = "Hurt";
    AnimationType["Attack"] = "Attack";
    AnimationType["Charge"] = "Charge";
    AnimationType["Shoot"] = "Shoot";
    AnimationType["Strike"] = "Strike";
    AnimationType["Chop"] = "Chop";
    AnimationType["Scratch"] = "Scratch";
    AnimationType["Punch"] = "Punch";
    AnimationType["Slap"] = "Slap";
    AnimationType["Slice"] = "Slice";
    AnimationType["MultiScratch"] = "MultiScratch";
    AnimationType["MultiStrike"] = "MultiStrike";
    AnimationType["Uppercut"] = "Uppercut";
    AnimationType["Ricochet"] = "Ricochet";
    AnimationType["Bite"] = "Bite";
    AnimationType["Shake"] = "Shake";
    AnimationType["Jab"] = "Jab";
    AnimationType["Kick"] = "Kick";
    AnimationType["Lick"] = "Lick";
    AnimationType["Slam"] = "Slam";
    AnimationType["Stomp"] = "Stomp";
    AnimationType["Appeal"] = "Appeal";
    AnimationType["Dance"] = "Dance";
    AnimationType["Twirl"] = "Twirl";
    AnimationType["TailWhip"] = "TailWhip";
    AnimationType["Sing"] = "Sing";
    AnimationType["Sound"] = "Sound";
    AnimationType["Rumble"] = "Rumble";
    AnimationType["FlapAround"] = "FlapAround";
    AnimationType["Gas"] = "Gas";
    AnimationType["Shock"] = "Shock";
    AnimationType["Emit"] = "Emit";
    AnimationType["SpAttack"] = "SpAttack";
    AnimationType["Withdraw"] = "Withdraw";
    AnimationType["RearUp"] = "RearUp";
    AnimationType["Swell"] = "Swell";
    AnimationType["Swing"] = "Swing";
    AnimationType["Double"] = "Double";
    AnimationType["Rotate"] = "Rotate";
    AnimationType["Hop"] = "Hop";
    AnimationType["Hover"] = "Hover";
    AnimationType["QuickStrike"] = "QuickStrike";
    AnimationType["EventSleep"] = "EventSleep";
    AnimationType["Wake"] = "Wake";
    AnimationType["Eat"] = "Eat";
    AnimationType["Tumble"] = "Tumble";
    AnimationType["Pose"] = "Pose";
    AnimationType["Pull"] = "Pull";
    AnimationType["Pain"] = "Pain";
    AnimationType["Float"] = "Float";
    AnimationType["DeepBreath"] = "DeepBreath";
    AnimationType["Nod"] = "Nod";
    AnimationType["Sit"] = "Sit";
    AnimationType["LookUp"] = "LookUp";
    AnimationType["Sink"] = "Sink";
    AnimationType["Trip"] = "Trip";
    AnimationType["Laying"] = "Laying";
    AnimationType["LeapForth"] = "LeapForth";
    AnimationType["Head"] = "Head";
    AnimationType["Cringe"] = "Cringe";
    AnimationType["LostBalance"] = "LostBalance";
    AnimationType["TumbleBack"] = "TumbleBack";
    AnimationType["HitGround"] = "HitGround";
    AnimationType["Faint"] = "Faint";
    AnimationType["Fainted"] = "Fainted";
    AnimationType["StandingUp"] = "StandingUp";
    AnimationType["DigIn"] = "DigIn";
    AnimationType["DigOut"] = "DigOut";
    AnimationType["Wiggle"] = "Wiggle";
    AnimationType["Yawn"] = "Yawn";
    AnimationType["RaiseArms"] = "RaiseArms";
    AnimationType["CarefulWalk"] = "CarefulWalk";
    AnimationType["Injured"] = "Injured";
    AnimationType["Jump"] = "Jump";
    AnimationType["Roar"] = "Roar";
    AnimationType["Wave"] = "Wave";
    AnimationType["Cry"] = "Cry";
    AnimationType["Bow"] = "Bow";
    AnimationType["Special0"] = "Special0";
    AnimationType["Special1"] = "Special1";
    AnimationType["Special2"] = "Special2";
    AnimationType["Special3"] = "Special3";
    AnimationType["Special4"] = "Special4";
    AnimationType["Special5"] = "Special5";
    AnimationType["Special6"] = "Special6";
    AnimationType["Special7"] = "Special7";
    AnimationType["Special8"] = "Special8";
    AnimationType["Special9"] = "Special9";
    AnimationType["Special10"] = "Special10";
    AnimationType["Special11"] = "Special11";
    AnimationType["Special12"] = "Special12";
    AnimationType["Special13"] = "Special13";
    AnimationType["Special14"] = "Special14";
    AnimationType["Special15"] = "Special15";
    AnimationType["Special16"] = "Special16";
    AnimationType["Special17"] = "Special17";
    AnimationType["Special18"] = "Special18";
    AnimationType["Special19"] = "Special19";
    AnimationType["Special20"] = "Special20";
    AnimationType["Special21"] = "Special21";
    AnimationType["Special22"] = "Special22";
    AnimationType["Special23"] = "Special23";
    AnimationType["Special24"] = "Special24";
    AnimationType["Special25"] = "Special25";
    AnimationType["Special26"] = "Special26";
    AnimationType["Special27"] = "Special27";
    AnimationType["Special28"] = "Special28";
    AnimationType["Special29"] = "Special29";
    AnimationType["Special30"] = "Special30";
    AnimationType["Special31"] = "Special31";
})(AnimationType || (exports.AnimationType = AnimationType = {}));
exports.AnimationComplete = {
    [AnimationType.Idle]: true,
    [AnimationType.Walk]: true,
    [AnimationType.Sleep]: false,
    [AnimationType.Hurt]: true,
    [AnimationType.Attack]: true,
    [AnimationType.Charge]: true,
    [AnimationType.Shoot]: true,
    [AnimationType.Strike]: true,
    [AnimationType.Chop]: true,
    [AnimationType.Scratch]: true,
    [AnimationType.Punch]: true,
    [AnimationType.Slap]: true,
    [AnimationType.Slice]: true,
    [AnimationType.MultiScratch]: true,
    [AnimationType.MultiStrike]: true,
    [AnimationType.Uppercut]: true,
    [AnimationType.Ricochet]: true,
    [AnimationType.Bite]: true,
    [AnimationType.Shake]: true,
    [AnimationType.Jab]: true,
    [AnimationType.Kick]: true,
    [AnimationType.Lick]: true,
    [AnimationType.Slam]: true,
    [AnimationType.Stomp]: true,
    [AnimationType.Appeal]: true,
    [AnimationType.Dance]: true,
    [AnimationType.Twirl]: true,
    [AnimationType.TailWhip]: false,
    [AnimationType.Sing]: false,
    [AnimationType.Sound]: false,
    [AnimationType.Rumble]: true,
    [AnimationType.FlapAround]: true,
    [AnimationType.Gas]: true,
    [AnimationType.Shock]: true,
    [AnimationType.Emit]: true,
    [AnimationType.SpAttack]: true,
    [AnimationType.Withdraw]: true,
    [AnimationType.RearUp]: true,
    [AnimationType.Swell]: true,
    [AnimationType.Swing]: true,
    [AnimationType.Double]: true,
    [AnimationType.Rotate]: true,
    [AnimationType.Hop]: true,
    [AnimationType.Hover]: true,
    [AnimationType.QuickStrike]: true,
    [AnimationType.EventSleep]: false,
    [AnimationType.Wake]: false,
    [AnimationType.Eat]: false,
    [AnimationType.Tumble]: false,
    [AnimationType.Pose]: false,
    [AnimationType.Pull]: false,
    [AnimationType.Pain]: false,
    [AnimationType.Float]: false,
    [AnimationType.DeepBreath]: false,
    [AnimationType.Nod]: true,
    [AnimationType.Sit]: false,
    [AnimationType.LookUp]: false,
    [AnimationType.Sink]: false,
    [AnimationType.Trip]: false,
    [AnimationType.Laying]: false,
    [AnimationType.LeapForth]: false,
    [AnimationType.Head]: false,
    [AnimationType.Cringe]: false,
    [AnimationType.LostBalance]: false,
    [AnimationType.TumbleBack]: false,
    [AnimationType.HitGround]: false,
    [AnimationType.Faint]: false,
    [AnimationType.Fainted]: false,
    [AnimationType.StandingUp]: false,
    [AnimationType.DigIn]: false,
    [AnimationType.DigOut]: false,
    [AnimationType.Wiggle]: false,
    [AnimationType.Yawn]: false,
    [AnimationType.RaiseArms]: false,
    [AnimationType.CarefulWalk]: false,
    [AnimationType.Injured]: false,
    [AnimationType.Jump]: false,
    [AnimationType.Roar]: false,
    [AnimationType.Wave]: false,
    [AnimationType.Cry]: false,
    [AnimationType.Bow]: false,
    [AnimationType.Special0]: false,
    [AnimationType.Special1]: false,
    [AnimationType.Special2]: false,
    [AnimationType.Special3]: false,
    [AnimationType.Special4]: false,
    [AnimationType.Special5]: false,
    [AnimationType.Special6]: false,
    [AnimationType.Special7]: false,
    [AnimationType.Special8]: false,
    [AnimationType.Special9]: false,
    [AnimationType.Special10]: false,
    [AnimationType.Special11]: false,
    [AnimationType.Special12]: false,
    [AnimationType.Special13]: false,
    [AnimationType.Special14]: false,
    [AnimationType.Special15]: false,
    [AnimationType.Special16]: false,
    [AnimationType.Special17]: false,
    [AnimationType.Special18]: false,
    [AnimationType.Special19]: false,
    [AnimationType.Special20]: false,
    [AnimationType.Special21]: false,
    [AnimationType.Special22]: false,
    [AnimationType.Special23]: false,
    [AnimationType.Special24]: false,
    [AnimationType.Special25]: false,
    [AnimationType.Special26]: false,
    [AnimationType.Special27]: false,
    [AnimationType.Special28]: false,
    [AnimationType.Special29]: false,
    [AnimationType.Special30]: false,
    [AnimationType.Special31]: false
};
//# sourceMappingURL=Animation.js.map