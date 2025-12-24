const C3 = self.C3;
self.C3_GetObjectRefTable = function() {
  return [
    C3.Plugins.Touch,
    C3.Plugins.Arr,
    C3.Plugins.AJAX,
    C3.Plugins.Audio,
    C3.Plugins.Mouse,
    C3.Plugins.Eponesh_GameScore,
    C3.Plugins.LocalStorage,
    C3.Plugins.Sprite,
    C3.Behaviors.Tween,
    C3.Behaviors.Fade,
    C3.Behaviors.MoveTo,
    C3.Plugins.Spritefont2,
    C3.Plugins.TiledBg,
    C3.Behaviors.DragnDrop,
    C3.Behaviors.Sin,
    C3.Plugins.Browser,
    C3.Plugins.System.Cnds.IsGroupActive,
    C3.Plugins.System.Cnds.OnLayoutStart,
    C3.Plugins.Audio.Acts.Play,
    C3.Plugins.System.Acts.SetLayerInteractive,
    C3.Plugins.Sprite.Acts.SetInstanceVar,
    C3.Plugins.Arr.Exps.At,
    C3.Plugins.Sprite.Acts.SetAnimFrame,
    C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
    C3.Plugins.Eponesh_GameScore.Cnds.Language,
    C3.Plugins.Spritefont2.Acts.SetText,
    C3.Plugins.System.Cnds.Else,
    C3.Plugins.System.Cnds.Compare,
    C3.Behaviors.Tween.Acts.TweenOneProperty,
    C3.Plugins.System.Cnds.TriggerOnce,
    C3.Plugins.System.Cnds.Repeat,
    C3.Plugins.System.Acts.CreateObject,
    C3.Plugins.System.Exps.random,
    C3.Plugins.Sprite.Acts.SetAngle,
    C3.Plugins.System.Exps.int,
    C3.Plugins.Sprite.Exps.AnimationFrameCount,
    C3.Plugins.Sprite.Exps.Angle,
    C3.Plugins.Sprite.Exps.X,
    C3.Plugins.System.Exps.viewportbottom,
    C3.Plugins.Sprite.Exps.LayerName,
    C3.Plugins.Arr.Acts.SetXY,
    C3.Plugins.System.Acts.WaitForPreviousActions,
    C3.Plugins.System.Exps.choose,
    C3.Plugins.Sprite.Exps.ImagePointX,
    C3.Plugins.Sprite.Exps.ImagePointY,
    C3.Plugins.TiledBg.Acts.SetWidth,
    C3.Behaviors.Tween.Acts.TweenTwoProperties,
    C3.Behaviors.MoveTo.Acts.MoveToPosition,
    C3.Plugins.Touch.Cnds.OnTouchObject,
    C3.Plugins.Touch.Cnds.IsTouchingObject,
    C3.Plugins.Touch.Exps.X,
    C3.Plugins.Touch.Exps.Y,
    C3.Plugins.Sprite.Acts.SubInstanceVar,
    C3.Plugins.Sprite.Acts.Destroy,
    C3.Plugins.Sprite.Cnds.CompareInstanceVar,
    C3.Behaviors.Tween.Acts.StopAllTweens,
    C3.Plugins.System.Cnds.Every,
    C3.Plugins.System.Cnds.LayerInteractive,
    C3.Behaviors.Fade.Cnds.OnFadeInEnd,
    C3.Plugins.System.Acts.Wait,
    C3.Plugins.System.Acts.SetLayerVisible,
    C3.Plugins.Eponesh_GameScore.Acts.AdsShowFullscreen,
    C3.Plugins.Mouse.Cnds.OnWheel,
    C3.Plugins.Sprite.Cnds.IsVisible,
    C3.Plugins.Sprite.Exps.Y,
    C3.Plugins.Sprite.Cnds.CompareY,
    C3.Behaviors.DragnDrop.Acts.Drop,
    C3.Plugins.Sprite.Acts.SetY,
    C3.Behaviors.DragnDrop.Acts.SetEnabled,
    C3.Plugins.Sprite.Cnds.CompareFrame,
    C3.Plugins.Sprite.Acts.SetVisible,
    C3.Plugins.System.Cnds.LayerVisible,
    C3.Plugins.Eponesh_GameScore.Cnds.IsAdsFullscreenPlaying,
    C3.Plugins.Eponesh_GameScore.Cnds.IsAdsPreloaderPlaying,
    C3.Plugins.Eponesh_GameScore.Cnds.IsAdsRewardedPlaying,
    C3.Plugins.System.Acts.SubVar,
    C3.Plugins.System.Cnds.CompareVar,
    C3.Plugins.System.Acts.SetVar,
    C3.Behaviors.MoveTo.Cnds.OnArrived,
    C3.Plugins.Spritefont2.Acts.SetInstanceVar,
    C3.Plugins.Spritefont2.Acts.SetDefaultColor,
    C3.Plugins.Sprite.Acts.SetScale,
    C3.Plugins.System.Exps.zeropad,
    C3.Plugins.System.Acts.AddVar,
    C3.Plugins.Eponesh_GameScore.Cnds.IsAdsRewardedAvailable,
    C3.Plugins.Eponesh_GameScore.Acts.AdsShowRewarded,
    C3.Plugins.Eponesh_GameScore.Cnds.OnAdsRewardedReward,
    C3.Plugins.Eponesh_GameScore.Cnds.PlatformType,
    C3.Plugins.Browser.Cnds.IsFullscreen,
    C3.Plugins.Browser.Acts.RequestFullScreen,
    C3.Plugins.Audio.Acts.SetMuted,
    C3.Plugins.Eponesh_GameScore.Cnds.OnAdsFullscreenClose,
    C3.Plugins.Eponesh_GameScore.Cnds.OnAdsPreloaderClose,
    C3.Plugins.Eponesh_GameScore.Cnds.OnAdsRewardedClose,
    C3.Plugins.Audio.Acts.SetSilent,
    C3.Plugins.Eponesh_GameScore.Acts.PlayerSet,
    C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
    C3.Plugins.Eponesh_GameScore.Acts.LeaderboardOpen,
    C3.Plugins.LocalStorage.Acts.SetItem,
    C3.Plugins.Arr.Exps.AsJSON,
    C3.Plugins.AJAX.Acts.RequestFile,
    C3.Plugins.AJAX.Cnds.OnComplete,
    C3.Plugins.Arr.Acts.JSONLoad,
    C3.Plugins.AJAX.Exps.LastData,
    C3.Plugins.LocalStorage.Acts.CheckItemExists,
    C3.Plugins.LocalStorage.Cnds.OnItemExists,
    C3.Plugins.LocalStorage.Acts.GetItem,
    C3.Plugins.LocalStorage.Cnds.OnItemMissing,
    C3.Plugins.LocalStorage.Cnds.OnItemGet,
    C3.Plugins.LocalStorage.Exps.ItemValue,
    C3.Plugins.System.Acts.GoToLayout
  ];
};
self.C3_JsPropNameTable = [{
    Touch: 0
  },
  {
    mobs: 0
  },
  {
    settings: 0
  },
  {
    lang: 0
  },
  {
    AJAX: 0
  },
  {
    Audio: 0
  },
  {
    Mouse: 0
  },
  {
    GamePush: 0
  },
  {
    LocalStorage: 0
  },
  {
    bg: 0
  },
  {
    island: 0
  },
  {
    panelback: 0
  },
  {
    panelinfo: 0
  },
  {
    Tween: 0
  },
  {
    iconcoin: 0
  },
  {
    Fade: 0
  },
  {
    black: 0
  },
  {
    MoveTo: 0
  },
  {
    eventDrop: 0
  },
  {
    type: 0
  },
  {
    btn: 0
  },
  {
    Sprite: 0
  },
  {
    power: 0
  },
  {
    purchased: 0
  },
  {
    price: 0
  },
  {
    sf: 0
  },
  {
    loot: 0
  },
  {
    health: 0
  },
  {
    mob: 0
  },
  {
    barhp: 0
  },
  {
    hpProgress: 0
  },
  {
    hp: 0
  },
  {
    panelshop: 0
  },
  {
    panelshop2: 0
  },
  {
    fruit: 0
  },
  {
    barhistoryProgress: 0
  },
  {
    hpProgressWhite: 0
  },
  {
    panelshop3: 0
  },
  {
    DragDrop: 0
  },
  {
    scrollFruit: 0
  },
  {
    sword: 0
  },
  {
    scrollSword: 0
  },
  {
    iconSword: 0
  },
  {
    number: 0
  },
  {
    buttonbuy: 0
  },
  {
    Sine: 0
  },
  {
    iconnotification: 0
  },
  {
    effectattack: 0
  },
  {
    iconevent: 0
  },
  {
    iconreward: 0
  },
  {
    panelreward: 0
  },
  {
    buttonclose: 0
  },
  {
    minus: 0
  },
  {
    null: 0
  },
  {
    reward: 0
  },
  {
    rewarditem: 0
  },
  {
    shadow: 0
  },
  {
    ADbutton: 0
  },
  {
    Browser: 0
  },
  {
    buttonsounds: 0
  },
  {
    background: 0
  },
  {
    timer: 0
  },
  {
    timerEvent: 0
  },
  {
    playtime: 0
  },
  {
    playtimeNeed: 0
  },
  {
    ad: 0
  }
];

self.InstanceType = {
  Touch: class extends self.IInstance {},
  mobs: class extends self.IArrayInstance {},
  settings: class extends self.IArrayInstance {},
  lang: class extends self.IArrayInstance {},
  AJAX: class extends self.IInstance {},
  Audio: class extends self.IInstance {},
  Mouse: class extends self.IInstance {},
  GamePush: class extends self.IInstance {},
  LocalStorage: class extends self.IInstance {},
  bg: class extends self.ISpriteInstance {},
  island: class extends self.ISpriteInstance {},
  panelback: class extends self.ISpriteInstance {},
  panelinfo: class extends self.ISpriteInstance {},
  iconcoin: class extends self.ISpriteInstance {},
  black: class extends self.ISpriteInstance {},
  eventDrop: class extends self.ISpriteInstance {},
  btn: class extends self.ISpriteInstance {},
  Sprite: class extends self.ISpriteInstance {},
  sf: class extends self.ISpriteFontInstance {},
  mob: class extends self.ISpriteInstance {},
  barhp: class extends self.ISpriteInstance {},
  hpProgress: class extends self.ITiledBackgroundInstance {},
  hp: class extends self.ISpriteFontInstance {},
  panelshop: class extends self.ISpriteInstance {},
  panelshop2: class extends self.ISpriteInstance {},
  fruit: class extends self.ISpriteInstance {},
  barhistoryProgress: class extends self.ITiledBackgroundInstance {},
  hpProgressWhite: class extends self.ITiledBackgroundInstance {},
  panelshop3: class extends self.ISpriteInstance {},
  scrollFruit: class extends self.ISpriteInstance {},
  sword: class extends self.ISpriteInstance {},
  scrollSword: class extends self.ISpriteInstance {},
  iconSword: class extends self.ISpriteInstance {},
  buttonbuy: class extends self.ISpriteInstance {},
  iconnotification: class extends self.ISpriteInstance {},
  effectattack: class extends self.ISpriteInstance {},
  iconevent: class extends self.ISpriteInstance {},
  iconreward: class extends self.ISpriteInstance {},
  panelreward: class extends self.ISpriteInstance {},
  buttonclose: class extends self.ISpriteInstance {},
  rewarditem: class extends self.ISpriteInstance {},
  shadow: class extends self.ISpriteInstance {},
  ADbutton: class extends self.ISpriteInstance {},
  Browser: class extends self.IInstance {},
  buttonsounds: class extends self.ISpriteInstance {},
  background: class extends self.ISpriteInstance {}
}