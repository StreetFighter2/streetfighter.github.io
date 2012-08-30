﻿
Player.prototype.CreateMBison = function(user)
{
    var player = new Player("mbison",201,247,user);
    var folder = "images/misc/" + player.folder_;
    player.forceNoAdjustShadowPosition_ = true;
    player.defaultShadowImageSrc_ = "200"
    player.circle_.OffsetY = 0;

    var stance = player.AddAnimation(MISC_FLAGS.NONE,"stance",0,["stance"],0,false);
    stance.Flags = ({Player:PLAYER_FLAGS.ALLOW_CHANGE_DIRECTION | PLAYER_FLAGS.HOLD_ZINDEX,Pose:POSE_FLAGS.STANDING});
    stance.AddFrame(player,0,"",folder + "/r-stance-1.png",7,{Player:PLAYER_FLAGS.MOBILE},MISC_FLAGS.NONE,0,0,0,0,null,-26,-15,0,0,0,0,0,0);
    stance.AddFrame(player,0,"",folder + "/r-stance-0.png",7,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-24,-15,0,0,0,0,0,0);
    stance.AddFrame(player,0,"",folder + "/r-stance-1.png",7,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-26,-15,0,0,0,0,0,0);
    stance.AddFrame(player,0,"",folder + "/r-stance-2.png",7,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-26,-13,0,0,0,0,0,0);
    stance.AddFrame(player,0,"",folder + "/r-stance-3.png",7,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-26,-13,0,0,0,0,0,0);
    stance.AddFrame(player,0,"",folder + "/r-stance-2.png",7,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-26,-13,0,0,0,0,0,0);

    var jump_land = player.AddAnimation(MISC_FLAGS.NONE,"jump land",0,["jump-land"],0,false);
    jump_land.AddFrameWithSound(player,1,"audio/misc/jump-land.zzz",0,"",folder + "/r-crouch-0.png",2,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-38,-18,0,0,0,0,0,0);
    jump_land.AddFrame(player,0,"",folder + "/r-stance-1.png",2,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-26,-15,0,0,0,0,0,0);


    var crouch = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_BACKWARD|POSE_FLAGS.WALKING_FORWARD,"crouch",0,[BUTTONS.CROUCH],99,false);
    crouch.Flags = ({Player:PLAYER_FLAGS.ALLOW_CHANGE_DIRECTION | PLAYER_FLAGS.HOLD_ZINDEX,Pose:POSE_FLAGS.CROUCHING});
    crouch.AddFrame(player,0,"",folder + "/r-crouch-0.png",3,{Player:PLAYER_FLAGS.MOBILE},MISC_FLAGS.NONE,0,0,0,0,null,-38,-18,0,0,0,0,0,0);
    crouch.AddFrame(player,0,"",folder + "/r-crouch-1.png",3,{Player:PLAYER_FLAGS.MUST_HOLD_KEY},MISC_FLAGS.NONE,0,0,0,0,null,-63,-13,0,0,0,0,0,0);
    crouch.AddFrame(player,0,"",folder + "/r-crouch-2.png",3,{Player:PLAYER_FLAGS.HOLD_FRAME|PLAYER_FLAGS.MOBILE},MISC_FLAGS.NONE,0,0,0,0,null,-73,-15,0,0,0,0,0,0);
    crouch.AddFrame(player,0,"",folder + "/r-crouch-1.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-63,-13,0,0,0,0,0,0);
    crouch.AddFrame(player,0,"",folder + "/r-crouch-0.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-38,-18,0,0,0,0,0,0);


    var hitReact_sLN = player.AddAnimation(POSE_FLAGS.STANDING,"hr_sLN",0,["hr_sLN"],0,false);
    hitReact_sLN.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_sLN.AddFrame(player,0,"",folder + "/hit-sln-0.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -8, -20, 0, 0, 0, 0, 0, 0);
    hitReact_sLN.AddFrameWithSound(player,1,"audio/mbison/clocked.zzz",0,"",folder + "/hit-sln-1.png",8,MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -37, -20, 0, 0, 0, 0, 0, 0);
    hitReact_sLN.AddFrame(player,0,"",folder + "/hit-sln-0.png",8,MISC_FLAGS.NONE,MISC_FLAGS.NONE, 0, 0, 0, 0, null, -8, -20, 0, 0, 0, 0, 0, 0);

    var hitReact_sLF = player.AddAnimation(POSE_FLAGS.STANDING,"hr_sLN",0,["hr_sLF"],0,false);
    hitReact_sLF.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_sLF.AddFrame(player,0,"",folder + "/hit-sln-0.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -8, -20, 0, 0, 0, 0, 0, 0);
    hitReact_sLF.AddFrameWithSound(player,1,"audio/mbison/clocked.zzz",0,"",folder + "/hit-sln-1.png",8,MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -37, -20, 0, 0, 0, 0, 0, 0);
    hitReact_sLF.AddFrame(player,0,"",folder + "/hit-sln-0.png",8,MISC_FLAGS.NONE,MISC_FLAGS.NONE, 0, 0, 0, 0, null, -8, -20, 0, 0, 0, 0, 0, 0);

    var hitReact_sMN = player.AddAnimation(POSE_FLAGS.STANDING,"hr_sMN",0,["hr_sMN"],0,false);
    hitReact_sMN.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_sMN.AddFrame(player,0,"",folder + "/hit-smn-0.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -9, -13, 0, 0, 0, 0, 0, 0);
    hitReact_sMN.AddFrame(player,0,"",folder + "/hit-smf-1.png",8,MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, 0, -13, 0, 0, 0, 0, 0, 0);
    hitReact_sMN.AddFrame(player,0,"",folder + "/hit-smf-2.png",8,MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -10, -23, 0, 0, 0, 0, 0, 0);

    var hitReact_sMF = player.AddAnimation(POSE_FLAGS.STANDING,"hr_sMF",0,["hr_sMF"],0,false);
    hitReact_sMF.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_sMF.AddFrame(player, 0, "", folder + "/hit-smn-1.png", 3, MISC_FLAGS.NONE, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -37, -20, 0, 0, 0, 0, 0, 0);
    hitReact_sMF.AddFrame(player, 0, "", folder + "/hit-smn-1.png", 3, MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -46, -24, 0, 0, 0, 0, 0, 0);
    hitReact_sMF.AddFrame(player, 0, "", folder + "/hit-sln-1.png", 3, MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -35, -20, 0, 0, 0, 0, 0, 0);

    var hitReact_sHN = player.AddAnimation(POSE_FLAGS.STANDING,"hr_sHN",0,["hr_sHN"],0,false);
    hitReact_sHN.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_sHN.AddFrame(player,0,"",folder + "/hit-smf-1.png",4,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -46, -24, 0, 0, 0, 0, 0, 0);
    hitReact_sHN.AddFrameWithSound(player,1,"audio/mbison/clocked.zzz",0,"",folder + "/hit-shn-0.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -82, -29, 0, 0, 0, 0, 0, 0);
    hitReact_sHN.AddFrame(player,0,"",folder + "/hit-sln-0.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -37, -20, 0, 0, 0, 0, 0, 0);

    var hitReact_sHF = player.AddAnimation(POSE_FLAGS.STANDING,"hr_sHF",0,["hr_sHF"],0,false);
    hitReact_sHF.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_sHF.AddFrame(player,0,"",folder + "/hit-smn-1.png",4,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -46, -24, 0, 0, 0, 0, 0, 0);
    hitReact_sHF.AddFrameWithSound(player,1,"audio/mbison/clocked.zzz",0,"",folder + "/hit-shn-1.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -82, -29, 0, 0, 0, 0, 0, 0);
    hitReact_sHF.AddFrame(player,0,"",folder + "/hit-sln-0.png",8,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -37, -20, 0, 0, 0, 0, 0, 0);

    var getup = player.AddAnimation(MISC_FLAGS.NONE,"getup",0,["hr_getup"],0,false);
    getup.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    getup.AddFrameWithSound(player,1,"audio/misc/floored-1.zzz",0,"200",folder + "/hit-trip-3.png",4,{Player:PLAYER_FLAGS.INVULNERABLE,Spawn:SPAWN_FLAGS.SPAWN_SMALLDIRT},{Player:PLAYER_FLAGS.MOBILE});
    getup.AddFrame(player,0,"",folder + "/down.png",4,{Player:PLAYER_FLAGS.INVULNERABLE});
    getup.AddFrame(player,0,"",folder + "/getup-0.png",4,{Player:PLAYER_FLAGS.INVULNERABLE});
    getup.AddFrame(player,0,"",folder + "/getup-1.png",4,{Player:PLAYER_FLAGS.INVULNERABLE});
    getup.AddFrame(player,0,"",folder + "/getup-2.png",4,{Player:PLAYER_FLAGS.INVULNERABLE});
    getup.AddFrame(player,0,"",folder + "/getup-3.png",4,{Player:PLAYER_FLAGS.INVULNERABLE});
    getup.AddFrame(player,0,"",folder + "/r-crouch-0.png",4,{Player:PLAYER_FLAGS.INVULNERABLE});

    var hitReact_bounce = player.AddAnimation(MISC_FLAGS.NONE,"bounce",0,["hr_bounce"],0,false);
    hitReact_bounce.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX | PLAYER_FLAGS.USE_CURRENT_VX});
    hitReact_bounce.ChainVxFunc = (function(v){ return v * 0.75; });
    hitReact_bounce.ChainVyFunc = (function(v){ return v * 0.5; });
    hitReact_bounce.Vy = (80);
    hitReact_bounce.AddFrameWithSound(player,1,"audio/misc/floored-2.zzz",0,"200",folder + "/hit-trip-2.png",4,{Player:PLAYER_FLAGS.INVULNERABLE,Spawn:SPAWN_FLAGS.SPAWN_BIGDIRT},{Player:PLAYER_FLAGS.MOBILE},0,1);
    hitReact_bounce.AddFrame(player,0,"200",folder + "/hit-trip-3.png",CONSTANTS.FRAME_MAX,{Pose:POSE_FLAGS.AIRBORNE,Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.INVULNERABLE},{Player: PLAYER_FLAGS.MOBILE});
    hitReact_bounce.Chain(getup);

    var hitReact_trip = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.CROUCHING,"tripped",0,["hr_trip"],0,false);
    hitReact_trip.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_trip.Vx = (25);
    hitReact_trip.Vy = (150);
    hitReact_trip.AddFrame(player,0,"",folder + "/hit-trip-0.png",32,{Player:PLAYER_FLAGS.INVULNERABLE},{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,0,50);
    hitReact_trip.AddFrame(player,0,"",folder + "/hit-trip-1.png",8,{Player:PLAYER_FLAGS.INVULNERABLE});
    hitReact_trip.AddFrame(player,0,"",folder + "/hit-trip-2.png",CONSTANTS.FRAME_MAX,{Player:PLAYER_FLAGS.INVULNERABLE});
    hitReact_trip.Chain(hitReact_bounce);

    var dizzy = player.AddAnimation(MISC_FLAGS.NONE,"dizzy",0,["hr_sodizzy"],0,false);
    dizzy.Flags = ({ Player: PLAYER_FLAGS.HOLD_ZINDEX });
    dizzy.AdjustShadowPosition = false;
    dizzy.AddFrame(player,0,"",folder + "/dizzy-0.png",32,{ Player: PLAYER_FLAGS.DIZZY },{Player: PLAYER_FLAGS.MOBILE});
    dizzy.AddFrame(player,0,"",folder + "/dizzy-1.png",32,{ Player: PLAYER_FLAGS.DIZZY });
    dizzy.AddFrame(player,0,"",folder + "/dizzy-2.png",32,{ Player: PLAYER_FLAGS.DIZZY });
    dizzy.AddFrame(player,0,"",folder + "/dizzy-1.png",32,{ Player: PLAYER_FLAGS.DIZZY });
    dizzy.Chain(dizzy);

    var getup_dizzy = player.AddAnimation(MISC_FLAGS.NONE,"getup",0,["hr_getupdizzy"],0,false);
    getup_dizzy.Flags = ({ Player: PLAYER_FLAGS.HOLD_ZINDEX });
    getup_dizzy.AddFrameWithSound(player,1,"audio/misc/floored-1.zzz",0,"200",folder + "/hit-trip-3.png",4,{Player:PLAYER_FLAGS.INVULNERABLE,Spawn:SPAWN_FLAGS.SPAWN_SMALLDIRT},{Player:PLAYER_FLAGS.MOBILE});
    getup_dizzy.AddFrame(player,0,"200",folder + "/down.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE });
    getup_dizzy.AddFrame(player,0,"",folder + "/getup-0.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE });
    getup_dizzy.AddFrame(player,0,"",folder + "/getup-1.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE });
    getup_dizzy.AddFrame(player,0,"",folder + "/getup-2.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE });
    getup_dizzy.AddFrame(player,0,"",folder + "/getup-3.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE });
    getup_dizzy.AddFrame(player,0,"",folder + "/crouch-0.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE });
    getup_dizzy.Chain(dizzy);

    var hitReact_dizzyBounce = player.AddAnimation(MISC_FLAGS.NONE,"dizzy bounce",0,["hr_dizzybounce"],0,false);
    hitReact_dizzyBounce.Flags = ({ Player: PLAYER_FLAGS.HOLD_ZINDEX | PLAYER_FLAGS.USE_CURRENT_VX });
    hitReact_dizzyBounce.ChainVxFunc = (function(v){ return v * 0.75; });
    hitReact_dizzyBounce.Vy = (80);
    hitReact_dizzyBounce.AddFrameWithSound(player,1,"audio/misc/floored-2.zzz",0,"200",folder + "/hit-trip-2.png",4,{ Player: PLAYER_FLAGS.INVULNERABLE | PLAYER_FLAGS.IGNORE_COLLISIONS,Spawn: SPAWN_FLAGS.SPAWN_BIGDIRT },{ Player: PLAYER_FLAGS.MOBILE },0,1);
    hitReact_dizzyBounce.AddFrame(player,0,"",folder + "/hit-trip-3.png",CONSTANTS.FRAME_MAX,{ Pose: POSE_FLAGS.AIRBORNE,Player: PLAYER_FLAGS.USE_ATTACK_DIRECTION | PLAYER_FLAGS.INVULNERABLE | PLAYER_FLAGS.IGNORE_ATTACKS });
    hitReact_dizzyBounce.Chain(getup_dizzy);

    var hitReact_dizzy = player.AddAnimation(POSE_FLAGS.STANDING,"dizzy",0,["hr_dizzy"],0,false);
    hitReact_dizzy.Flags = ({ Player: PLAYER_FLAGS.MOVE_TO_FRONT });
    hitReact_dizzy.Vx = (35);
    hitReact_dizzy.Vy = (200);
    hitReact_dizzy.AddFrame(player,0,"200",folder + "/hit-floored-0.png",32,{ Player: PLAYER_FLAGS.INVULNERABLE | PLAYER_FLAGS.IGNORE_ATTACKS }, MISC_FLAGS.NONE ,1, 0, 0, 0, null, -26, 0, 0, 0, 0, 0, 0, 0);
    hitReact_dizzy.AddFrame(player,0,"200",folder + "/hit-floored-1.png",CONSTANTS.FRAME_MAX,{ Player: PLAYER_FLAGS.SUPER_INVULNERABLE | PLAYER_FLAGS.IGNORE_ATTACKS }, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -37, -17, 0, 0, 0, 0, 0, 0);
    hitReact_dizzy.Chain(hitReact_dizzyBounce);

    var hitReact_knockDown = player.AddAnimation(POSE_FLAGS.STANDING,"knock down",0,["hr_knockdown"],0,false);
    hitReact_knockDown.AllowJuggle = true;
    hitReact_knockDown.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_knockDown.Vx = (25);
    hitReact_knockDown.Vy = (150);
    hitReact_knockDown.AddFrame(player,0,"200",folder + "/hit-floored-0.png",32,{ Player: PLAYER_FLAGS.INVULNERABLE | PLAYER_FLAGS.IGNORE_ATTACKS }, MISC_FLAGS.NONE ,1, 0, 0, 0, null, -26, 0, 0, 0, 0, 0, 0, 0);
    hitReact_knockDown.AddFrame(player,0,"200",folder + "/hit-floored-1.png",CONSTANTS.FRAME_MAX,{ Player: PLAYER_FLAGS.SUPER_INVULNERABLE | PLAYER_FLAGS.IGNORE_ATTACKS }, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -37, -17, 0, 0, 0, 0, 0, 0);
    hitReact_knockDown.Chain(hitReact_bounce);


    var down = player.AddAnimation(MISC_FLAGS.NONE,"down",0,["hr_down"],0,false);
    down.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    down.AddFrameWithSound(player,1,"audio/misc/floored-1.zzz",0,"200",folder + "/down.png",4,{Player:PLAYER_FLAGS.SUPER_INVULNERABLE,Spawn:SPAWN_FLAGS.SPAWN_SMALLDIRT},{Player:PLAYER_FLAGS.MOBILE});

    var hitReact_deadBounce = player.AddAnimation(MISC_FLAGS.NONE,"dead bounce",0,["hr_deadbounce"],0,false);
    hitReact_deadBounce.Flags = ({ Player: PLAYER_FLAGS.HOLD_ZINDEX | PLAYER_FLAGS.USE_CURRENT_VX });
    hitReact_deadBounce.ChainVxFunc = (function(v){ return v * 0.75; });
    hitReact_deadBounce.Vy = (80);
    hitReact_deadBounce.AddFrameWithSound(player,1,"audio/misc/floored-2.zzz",0,"200",folder + "/hit-trip-2.png",4,{Player:PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_COLLISIONS,Spawn:SPAWN_FLAGS.SPAWN_BIGDIRT},{Player:PLAYER_FLAGS.MOBILE},0,1);
    hitReact_deadBounce.AddFrame(player,0,"200",folder + "/hit-trip-3.png",CONSTANTS.FRAME_MAX,{Pose:POSE_FLAGS.AIRBORNE,Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS},{Player:PLAYER_FLAGS.MOBILE});
    hitReact_deadBounce.Chain(down);

    var hitReact_dead = player.AddAnimation(POSE_FLAGS.STANDING,"hr dead",0,["hr_dead"],0,false);
    hitReact_dead.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_FRONT});
    hitReact_dead.Vx = (35);
    hitReact_dead.Vy = (200);
    hitReact_dead.AddFrame(player,0,"200",folder + "/hit-floored-0.png",32,{ Player:PLAYER_FLAGS.INVULNERABLE | PLAYER_FLAGS.IGNORE_COLLISIONS },0,1);
    hitReact_dead.AddFrame(player,0,"200",folder + "/hit-floored-1.png",CONSTANTS.FRAME_MAX,{Player:PLAYER_FLAGS.SUPER_INVULNERABLE|PLAYER_FLAGS.IGNORE_COLLISIONS});
    hitReact_dead.Chain(hitReact_deadBounce);

    var hitReact_eject = player.AddAnimation(POSE_FLAGS.STANDING,"eject",0,["eject"],0,false);
    hitReact_eject.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX});
    hitReact_eject.Vx = (35);
    hitReact_eject.Vy = (200);
    hitReact_eject.AddFrame(player,0,"",folder + "/hit-floored-0.png",32,{Player:PLAYER_FLAGS.INVULNERABLE},{Player:PLAYER_FLAGS.MOBILE},0,1);
    hitReact_eject.AddFrame(player,0,"",folder + "/hit-floored-1.png",CONSTANTS.FRAME_MAX,{Player:PLAYER_FLAGS.SUPER_INVULNERABLE});
    hitReact_eject.Chain(hitReact_bounce);



    var jumpX = 36;
    var jumpY = 230;

    var jump = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"jump",0,[BUTTONS.JUMP],95,false);
    jump.Vy = (jumpY);
    jump.UserData = { Type: USER_DATA_TYPES.OFFSET,topOffset: 0,bottomOffset: 80 };
    jump.AddRepeatingFrame(player,0,"",folder + "/jump-0.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-38,-18,0,0,0,0,0,0);
    jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-1.png",6,{ Pose: POSE_FLAGS.AIRBORNE },MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-2.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-62,0,0,0,0,0,0,0);
    jump.AddRepeatingFrame(player,10,"136",folder + "/jump-3.png",20,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-84,0,0,0,0,0,0,0);
    jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump.Chain(jump_land);

    var f_jump = player.AddAnimation(POSE_FLAGS.STANDING | POSE_FLAGS.WALKING_FORWARD | POSE_FLAGS.WALKING_BACKWARD,"forward jump",0,[BUTTONS.FORWARD | BUTTONS.JUMP],95,false);
    f_jump.Vy = (jumpY);
    f_jump.Vx = (jumpX);
    f_jump.UserData = { Type: USER_DATA_TYPES.OFFSET,topOffset: 0,bottomOffset: 80 };
    f_jump.AddRepeatingFrame(player,0,"",folder + "/jump-0.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-38,-18,0,0,0,0,0,0);
    f_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-1.png",6,{ Pose: POSE_FLAGS.AIRBORNE },MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    f_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-2.png",6,{Player: PLAYER_FLAGS.SMALLER_AABB},MISC_FLAGS.NONE,0,0,0,0,-62,0,0,0,0,0,0,0);
    f_jump.AddRepeatingFrame(player,10,"136",folder + "/jump-3.png",20,{Player: PLAYER_FLAGS.SMALLER_AABB},MISC_FLAGS.NONE,0,0,0,0,-84,0,0,0,0,0,0,0);
    f_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    f_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    f_jump.Chain(jump_land);

    var b_jump = player.AddAnimation(POSE_FLAGS.STANDING | POSE_FLAGS.WALKING_FORWARD | POSE_FLAGS.WALKING_BACKWARD,"forward jump",0,[BUTTONS.BACK | BUTTONS.JUMP],95,false);
    b_jump.Vy = (jumpY);
    b_jump.Vx = (-jumpX);
    b_jump.UserData = { Type: USER_DATA_TYPES.OFFSET,topOffset: 0,bottomOffset: 80 };
    b_jump.AddRepeatingFrame(player,0,"",folder + "/jump-0.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-38,-18,0,0,0,0,0,0);
    b_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-1.png",6,{ Pose: POSE_FLAGS.AIRBORNE },MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    b_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-2.png",6,{Player: PLAYER_FLAGS.SMALLER_AABB},MISC_FLAGS.NONE,0,0,0,0,-62,0,0,0,0,0,0,0);
    b_jump.AddRepeatingFrame(player,10,"136",folder + "/jump-3.png",20,{Player: PLAYER_FLAGS.SMALLER_AABB},MISC_FLAGS.NONE,0,0,0,0,-84,0,0,0,0,0,0,0);
    b_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    b_jump.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    b_jump.Chain(jump_land);

    var turn = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"turn",0,["turn"],0,false);
    turn.AddFrame(player, 0, "200", folder + "/turn-0.png", 3, MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -11, -18, 0, 0, 0, 0, 0, 0);
    turn.AddFrame(player, 0, "200", folder + "/turn-1.png", 3, MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -74, -5, 0, 0, 0, 0, 0, 0);
    turn.AddFrame(player, 0, "200", folder + "/turn-2.png", 3, MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -30, -16, 0, 0, 0, 0, 0, 0);

    var cturn = player.AddAnimation(POSE_FLAGS.CROUCHING,"turn",0,["turn"],0,false);
    cturn.Flags = ({Player:PLAYER_FLAGS.HOLD_ZINDEX,Pose:POSE_FLAGS.CROUCHING});
    cturn.AddFrame(player,0,"",folder + "/cturn-0.png",2,{Player:PLAYER_FLAGS.MOBILE}, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -30, 0, 0, 0, 0, 0, 0, 0);
    cturn.AddFrame(player,0,"",folder + "/cturn-1.png",2, MISC_FLAGS.NONE, MISC_FLAGS.NONE, 0, 0, 0, 0, null, -90, -10, 0, 0, 0, 0, 0, 0);
    cturn.AddFrame(player,0,"",folder + "/r-crouch-2.png",2, MISC_FLAGS.NONE,MISC_FLAGS.NONE, 0, 0, 0, 0, null, -90, -28, 0, 0, 0, 0, 0, 0);
    cturn.Chain(crouch,2);


    var blockRelease = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD|POSE_FLAGS.ALLOW_BLOCK,"block",0,["block_relase"],-2,false);
    blockRelease.Flags = ({Player:PLAYER_FLAGS.BLOCKING|PLAYER_FLAGS.MOVE_TO_BACK});
    blockRelease.AddFrame(player,0,"",folder+"/block-1.png",2,{Player:PLAYER_FLAGS.BLOCKING},MISC_FLAGS.NONE,0,0,0,0,null,-74,-23,0,0,0,0,0,0);
    blockRelease.AddFrame(player,0,"",folder+"/block-0.png",2,{Player:PLAYER_FLAGS.BLOCKING},MISC_FLAGS.NONE,0,0,0,0,null,-34,-23,0,0,0,0,0,0);
    /*The POSE_FLAGS.ALLOW_BLOCK is checked seperately,it absolutely must be there,or else the move will not be found!
    Only one of the other flags need to match*/
    var block = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD|POSE_FLAGS.ALLOW_BLOCK,"block",0,[BUTTONS.BACK],-2,false);
    block.Flags = ({Player:PLAYER_FLAGS.BLOCKING,Pose:POSE_FLAGS.STANDING});
    block.AddFrame(player,0,"",folder+"/block-0.png",4,{Player:PLAYER_FLAGS.BLOCKING},MISC_FLAGS.NONE,0,0,0,0,null,-34,-23,0,0,0,0,0,0);
    block.AddFrame(player,0,"",folder+"/block-1.png",4,{Player:PLAYER_FLAGS.BLOCKING|PLAYER_FLAGS.MUST_HOLD_KEY},MISC_FLAGS.NONE,0,0,0,0,null,-74,-23,0,0,0,0,0,0);
    block.AddFrame(player,0,"",folder+"/block-1.png",4,{Player:PLAYER_FLAGS.BLOCKING|PLAYER_FLAGS.HOLD_FRAME},MISC_FLAGS.NONE,0,0,0,0,null,-74,-23,0,0,0,0,0,0);
    block.Chain(blockRelease);
    blockRelease.AllowInterupt(block,1,{Pose: POSE_FLAGS.ALLOW_BLOCK | POSE_FLAGS.ALLOW_BLOCK});

    var cblock = player.AddAnimation(POSE_FLAGS.CROUCHING|POSE_FLAGS.ALLOW_BLOCK,"crouch block",0,[BUTTONS.BACK],-1,false);
    cblock.Flags = ({Player:PLAYER_FLAGS.BLOCKING,Pose:POSE_FLAGS.CROUCHING});
    cblock.AddFrame(player,0,"",folder+"/c-block-0.png",4,{Player:PLAYER_FLAGS.BLOCKING},MISC_FLAGS.NONE,0,0,0,0,null,-92,-29,0,0,0,0,0,0);
    cblock.AddFrame(player,0,"",folder+"/c-block-1.png",4,{Player:PLAYER_FLAGS.BLOCKING|PLAYER_FLAGS.MUST_HOLD_KEY},MISC_FLAGS.NONE,0,0,0,0,null,-82,-29,0,0,0,0,0,0);
    cblock.AddFrame(player,0,"",folder+"/c-block-1.png",4,{Player:PLAYER_FLAGS.BLOCKING|PLAYER_FLAGS.HOLD_FRAME},MISC_FLAGS.NONE,0,0,0,0,null,-82,-29,0,0,0,0,0,0);
    cblock.Chain(crouch,2);

    var walkSpeed = 6;
    var f_walk = player.AddAnimation(POSE_FLAGS.STANDING,"f-walk",0,[BUTTONS.FORWARD],90,false);
    f_walk.AdjustShadowPosition = (false);
    f_walk.Flags = ({Player:PLAYER_FLAGS.LOOP_IF_KEYDOWN | PLAYER_FLAGS.HOLD_ZINDEX,Pose:POSE_FLAGS.WALKING_FORWARD});
    f_walk.AddRepeatingFrame(player,50,"168",folder + "/f_walk-0.png",3,{Player:PLAYER_FLAGS.MOBILE},MISC_FLAGS.NONE,walkSpeed,0,0,0,0,0,0,0,0,0,0,0);
    f_walk.AddRepeatingFrame(player,50,"168",folder + "/f_walk-1.png",3,{Player:PLAYER_FLAGS.MUST_HOLD_KEY},MISC_FLAGS.NONE,walkSpeed,0,0,0,-14,0,0,0,0,0,0,0);

    var backpeddleSpeed = 5;
    var b_walk = player.AddAnimation(POSE_FLAGS.STANDING,"b-walk",0,[BUTTONS.BACK],80,false);
    b_walk.AdjustShadowPosition = (false);
    b_walk.Flags = ({Player:PLAYER_FLAGS.LOOP_IF_KEYDOWN | PLAYER_FLAGS.HOLD_ZINDEX,Pose:POSE_FLAGS.WALKING_BACKWARD});
    b_walk.AddRepeatingFrame(player,30,"168",folder + "/b_walk-0.png",3,{Player:PLAYER_FLAGS.MOBILE},MISC_FLAGS.NONE,-backpeddleSpeed,0,0,0,0,0,0,0,0,0,0,0);
    b_walk.AddRepeatingFrame(player,30,"168",folder + "/b_walk-1.png",3,{Player:PLAYER_FLAGS.MUST_HOLD_KEY},MISC_FLAGS.NONE,-backpeddleSpeed,0,0,0,0,0,0,0,0,0,0,0);

    /************************************/
    /************************************/
    /************************************/

    var k1 = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"light kick",0,[BUTTONS.LIGHT_KICK]);
    k1.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    k1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.AIRBORNE);
    k1.AddFrame(player,0,"",folder + "/k1-0.png",2,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,1,-10);
    k1.AddFrame(player,0,"",folder + "/k1-1.png",7,{ SwingSound:SWINGSOUND.LP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.LK },MISC_FLAGS.NONE,0,0,0,10,null,54,-1,ATTACK_FLAGS.LIGHT,[{ state: HIT_FLAGS.NEAR,x: 270,y: 185 },{ state: HIT_FLAGS.NEAR,x: 290,y: 95}],ATTACK_FLAGS.LIGHT,1,1,10);
    k1.EndBlock();
    k1.AddFrame(player,0,"",folder + "/turn-2.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);

    var k2 = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"medium kick",0,[BUTTONS.MEDIUM_KICK]);
    k2.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    k2.SetMediumAttack();
    k2.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.AIRBORNE);
    k2.AddFrame(player,0,"",folder + "/k1-0.png",4,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,1,-10);
    k2.AddFrame(player,0,"",folder + "/k2-0.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,40,10);
    k2.AddFrame(player,0,"",folder + "/k2-1.png",8,{SwingSound:SWINGSOUND.MP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.MK},MISC_FLAGS.NONE,0,0,0,10,null,40,0,ATTACK_FLAGS.MEDIUM,[{state:HIT_FLAGS.NEAR,x:230,y:165},{state:HIT_FLAGS.NEAR,x:300,y:165},{state:HIT_FLAGS.NEAR,x:370,y:165}],ATTACK_FLAGS.MEDIUM,CONSTANTS.SECOND_HIT,1,8);
    k2.AddFrame(player,0,"",folder + "/k2-0.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,40,10);
    k2.EndBlock();
    k2.AddFrame(player,0,"",folder + "/turn-2.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);

    var k3 = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"hard kick",0,[BUTTONS.HARD_KICK]);
    k3.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    k3.SetHardAttack();
    k3.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.AIRBORNE);
    k3.AddFrame(player,0,"",folder + "/k1-0.png",3,{Player:PLAYER_FLAGS.MOVE_TO_FRONT},{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,1,-10);
    k3.AddFrame(player,0,"",folder + "/k2-0.png",4,{SwingSound:SWINGSOUND.HP,Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HK},MISC_FLAGS.NONE,0,0,0,10,null,40,10,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.FAR,x:200,y:125}],ATTACK_FLAGS.HARD,1,1,20);
    k3.AddFrame(player,0,"",folder + "/k3-0.png",8,{Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HK},MISC_FLAGS.NONE,0,0,0,10,null,40,5,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.FAR,x:330,y:235}],ATTACK_FLAGS.HARD,2,1,20);
    k3.AddFrame(player,0,"",folder + "/k3-1.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,40,-5);
    k3.AddFrame(player,0,"",folder + "/k2-0.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,40,10);
    k3.AddFrame(player,0,"",folder + "/k1-0.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,1,-10);
    k3.EndBlock();
    k3.AddFrame(player,0,"",folder + "/turn-2.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);

    var p1 = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"light punch",0,[BUTTONS.LIGHT_PUNCH]);
    p1.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    p1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.AIRBORNE);
    p1.AddFrame(player,0,"",folder + "/p1-0.png",2,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-3,-11);
    p1.AddFrame(player,0,"",folder + "/p1-1.png",3,{ SwingSound:SWINGSOUND.LP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.LP },MISC_FLAGS.NONE,0,0,0,10,null,-15,-11,ATTACK_FLAGS.LIGHT,[{ state: HIT_FLAGS.NEAR,x: 220,y: 193 },{ state: HIT_FLAGS.FAR,x: 320,y: 193}],ATTACK_FLAGS.LIGHT,1,1,10);
    p1.AddFrame(player,0,"",folder + "/p1-2.png",3,{ Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.LP },MISC_FLAGS.NONE,0,0,0,10,null,-25,-11,ATTACK_FLAGS.LIGHT,[{ state: HIT_FLAGS.NEAR,x: 220,y: 193 },{ state: HIT_FLAGS.FAR,x: 320,y: 193}],ATTACK_FLAGS.LIGHT,1,1,10);
    p1.EndBlock();
    p1.AddFrame(player,0,"",folder + "/p1-3.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,10,-11);
    p1.AddFrame(player,0,"",folder + "/turn-2.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);

    var p2 = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"medium punch",0,[BUTTONS.MEDIUM_PUNCH]);
    p2.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    p2.SetMediumAttack();
    p2.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.AIRBORNE);
    p2.AddFrame(player,0,"",folder + "/p2-0.png",3,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-60,-11);
    p2.AddFrame(player,0,"",folder + "/p2-1.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-60,-11);
    p2.AddFrame(player,0,"",folder + "/p2-3.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-6,-11);
    p2.AddFrame(player,0,"",folder + "/p2-4.png",2,{ SwingSound:SWINGSOUND.MP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.MP },MISC_FLAGS.NONE,0,0,0,10,null,-22,-11,ATTACK_FLAGS.MEDIUM,[{ state: HIT_FLAGS.NEAR,x: 220,y: 193 },{ state: HIT_FLAGS.FAR,x: 320,y: 193}],ATTACK_FLAGS.MEDIUM,1,1,15);
    p2.AddFrame(player,0,"",folder + "/p2-5.png",3,{ Combat: COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.MP },MISC_FLAGS.NONE,0,0,0,10,null,-22,-11,ATTACK_FLAGS.MEDIUM,[{ state: HIT_FLAGS.NEAR,x: 150,y: 220 },{ state: HIT_FLAGS.FAR,x: 135,y: 270}],ATTACK_FLAGS.MEDIUM,1,1,15);
    p2.EndBlock();
    p2.AddFrame(player,0,"",folder + "/p1-3.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,1,-11);
    p2.AddFrame(player,0,"",folder + "/turn-2.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);

    var p3 = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"hard punch",0,[BUTTONS.HARD_PUNCH]);
    p3.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    p3.SetHardAttack();
    p3.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.AIRBORNE);
    p3.AddFrame(player,0,"",folder + "/p2-0.png",3,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-60,-11);
    p3.AddFrame(player,0,"",folder + "/p2-1.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-60,-11);
    p3.AddFrame(player,0,"",folder + "/p2-2.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-60,-11);
    p3.AddFrame(player,0,"",folder + "/p3-0.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-6,-11);
    p3.AddFrame(player,0,"",folder + "/p3-1.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-6,-11);
    p3.AddFrame(player,0,"",folder + "/p3-2.png",2,{SwingSound:SWINGSOUND.HP,Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,-25,-11,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:190,y:81},{state:HIT_FLAGS.FAR,x:240,y:181},{state:HIT_FLAGS.FAR,x:240,y:281}],ATTACK_FLAGS.HARD,1,1,20);
    p3.AddFrame(player,0,"",folder + "/p3-3.png",2,{Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,-35,-11,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:190,y:81},{state:HIT_FLAGS.FAR,x:240,y:181},{state:HIT_FLAGS.FAR,x:240,y:281}],ATTACK_FLAGS.HARD,1,1,20);
    p3.AddFrame(player,0,"",folder + "/p3-4.png",1,{Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,-35,-11,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:190,y:81},{state:HIT_FLAGS.FAR,x:240,y:181},{state:HIT_FLAGS.FAR,x:240,y:281}],ATTACK_FLAGS.HARD,1,1,20);
    p3.EndBlock();
    p3.AddFrame(player,0,"",folder + "/p1-3.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,1,-11);
    p3.AddFrame(player,0,"",folder + "/turn-2.png",8,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);


    var throw1X = -4;
    var throw1 = player.AddThrow(POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"throw 1",0,[BUTTONS.FORWARD|BUTTONS.MEDIUM_PUNCH],CONSTANTS.MAX_PRIORITY,false,false,0,"_1_shoulder_throw");
    throw1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.NONE,OVERRIDE_FLAGS.ALL);
    throw1.AddAlternateKeySequence([BUTTONS.FORWARD|BUTTONS.HARD_PUNCH]);
    throw1.AddAlternateKeySequence([BUTTONS.BACK|BUTTONS.HARD_PUNCH]);
    throw1.AddAlternateKeySequence([BUTTONS.BACK|BUTTONS.MEDIUM_PUNCH]);
    throw1.SetGrappleDistance(100);
    throw1.SetOtherPlayerAirborneFlags(AIRBORNE_FLAGS.NO);
    throw1.AddFrame(player,0,"",folder + "/r-crouch-0.png",3,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,0,0,ATTACK_FLAGS.THROW_START,[{state:HIT_FLAGS.NEAR,x:130,y:145},{state:HIT_FLAGS.FAR,x:170,y:185}],ATTACK_FLAGS.NONE,1);
    throw1.AddFrame(player,0,"",folder + "/throw-0.png",8,MISC_FLAGS.NONE,MISC_FLAGS.NONE);
    throw1.AddFrame(player,0,"",folder + "/throw-1.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE);
    throw1.AddFrame(player,0,"",folder + "/throw-2.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE);
    throw1.AddFrameWithSound(player,1,"audio/mbison/thrust-2.zzz",0,"",folder + "/throw-3.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE);
    throw1.AddFrame(player,0,"",folder + "/throw-3.png",16,{Combat:COMBAT_FLAGS.ATTACK},MISC_FLAGS.NONE,-10,0,0,100,null,0,0,ATTACK_FLAGS.THROW_EJECT,[{x:-1,y:-1,Fx:0.5,Fy:0.5,Tx:2.0}],ATTACK_FLAGS.NONE,2,1,15);

    var crouch_p1 = player.AddAnimation(POSE_FLAGS.CROUCHING,"crouch p1",0,[BUTTONS.LIGHT_PUNCH],110);
    crouch_p1.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    crouch_p1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.STANDING);
    crouch_p1.AddFrame(player,0,"",folder + "/crouch_p1-0.png",2,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-62,-21);
    crouch_p1.AddFrame(player,0,"",folder + "/crouch_p1-1.png",3,{ SwingSound:SWINGSOUND.LP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.LP },MISC_FLAGS.NONE,0,0,0,10,null,-41,-16,ATTACK_FLAGS.LIGHT | ATTACK_FLAGS.HITS_LOW,[{ state: HIT_FLAGS.NEAR,x: 210,y: 120 },{ state: HIT_FLAGS.NEAR,x: 290,y: 120}],ATTACK_FLAGS.LIGHT,1,1,10);
    crouch_p1.EndBlock();
    crouch_p1.AddFrame(player,0,"",folder + "/crouch_p1-0.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-62,-21);
    crouch_p1.Chain(crouch,2);

    var crouch_p2 = player.AddAnimation(POSE_FLAGS.CROUCHING,"crouch p2",0,[BUTTONS.MEDIUM_PUNCH],110);
    crouch_p2.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    crouch_p2.SetMediumAttack();
    crouch_p2.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.STANDING);
    crouch_p2.AddFrame(player,0,"",folder + "/crouch_p1-0.png",2,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-62,-21);
    crouch_p2.AddFrame(player,0,"",folder + "/crouch_p2-0.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-62,-21);
    crouch_p2.AddFrame(player,0,"",folder + "/crouch_p2-1.png",2,{ SwingSound:SWINGSOUND.MP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.MK },MISC_FLAGS.NONE,0,0,0,10,null,-41,-16,ATTACK_FLAGS.MEDIUM | ATTACK_FLAGS.HITS_LOW,[{ state: HIT_FLAGS.NEAR,x: 210,y: 120 },{ state: HIT_FLAGS.NEAR,x: 290,y: 120}],ATTACK_FLAGS.MEDIUM,1,1,15);
    crouch_p2.AddFrame(player,0,"",folder + "/crouch_p2-2.png",1,{ Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.MK },MISC_FLAGS.NONE,0,0,0,10,null,-41,-16,ATTACK_FLAGS.MEDIUM | ATTACK_FLAGS.HITS_LOW,[{ state: HIT_FLAGS.NEAR,x: 210,y: 120 },{ state: HIT_FLAGS.NEAR,x: 290,y: 120}],ATTACK_FLAGS.MEDIUM,1,1,15);
    crouch_p2.AddFrame(player,0,"",folder + "/crouch_p2-3.png",3,{ Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.MK },MISC_FLAGS.NONE,0,0,0,10,null,-41,-16,ATTACK_FLAGS.MEDIUM | ATTACK_FLAGS.HITS_LOW,[{ state: HIT_FLAGS.NEAR,x: 210,y: 120 },{ state: HIT_FLAGS.NEAR,x: 290,y: 120}],ATTACK_FLAGS.MEDIUM,1,1,15);
    crouch_p2.EndBlock();
    crouch_p2.AddFrame(player,0,"",folder + "/crouch_p1-0.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-62,-21);
    crouch_p2.Chain(crouch,2);

    var crouch_p3 = player.AddAnimation(POSE_FLAGS.CROUCHING|POSE_FLAGS.STANDING,"crouch p3",0,[BUTTONS.CROUCH|BUTTONS.HARD_PUNCH],110);
    crouch_p3.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    crouch_p3.SetHardAttack();
    crouch_p3.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.STANDING | OVERRIDE_FLAGS.AIRBORNE);
    crouch_p3.AddFrame(player,0,"",folder + "/crouch_p3-0.png",3,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-60,-11);
    crouch_p3.AddFrame(player,0,"",folder + "/crouch_p3-1.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-60,-11);
    crouch_p3.AddFrame(player,0,"",folder + "/p3-0.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-6,-11);
    crouch_p3.AddFrame(player,0,"",folder + "/p3-1.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-6,-11);
    crouch_p3.AddFrame(player,0,"",folder + "/p3-2.png",2,{SwingSound:SWINGSOUND.HP,Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,-25,-11,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:130,y:181},{state:HIT_FLAGS.FAR,x:215,y:181}],ATTACK_FLAGS.HARD,1,1,20);
    crouch_p3.AddFrame(player,0,"",folder + "/p3-3.png",2,{Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,-35,-11,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:130,y:181},{state:HIT_FLAGS.FAR,x:215,y:181}],ATTACK_FLAGS.HARD,1,1,20);
    crouch_p3.AddFrame(player,0,"",folder + "/p3-4.png",1,{Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,-35,-11,ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:130,y:181},{state:HIT_FLAGS.FAR,x:215,y:181}],ATTACK_FLAGS.HARD,1,1,20);
    crouch_p3.EndBlock();
    crouch_p3.AddFrame(player,0,"",folder + "/p1-3.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,1,-11);
    crouch_p3.AddFrame(player,0,"",folder + "/crouch_p1-0.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-62,-21);
    crouch_p3.Chain(crouch,2);

    var crouch_k1 = player.AddAnimation(POSE_FLAGS.CROUCHING,"crouch k1",0,[BUTTONS.LIGHT_KICK],110);
    crouch_k1.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    crouch_k1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.STANDING);
    crouch_k1.AddFrame(player,0,"",folder + "/crouch_k1-0.png",4,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-41,-16);
    crouch_k1.AddFrame(player,0,"",folder + "/crouch_k1-1.png",4,{ SwingSound:SWINGSOUND.LP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.LK },MISC_FLAGS.NONE,0,0,0,10,null,-46,-20,ATTACK_FLAGS.LIGHT | ATTACK_FLAGS.HITS_LOW,[{ state: HIT_FLAGS.NEAR,x: 210,y: 40 },{ state: HIT_FLAGS.NEAR,x: 260,y: 10}],ATTACK_FLAGS.LIGHT,1,1,10);
    crouch_k1.EndBlock();
    crouch_k1.AddFrame(player,0,"",folder + "/crouch_k1-0.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-41,-16);
    crouch_k1.Chain(crouch,2);

    var crouch_k2 = player.AddAnimation(POSE_FLAGS.CROUCHING,"crouch k2",0,[BUTTONS.MEDIUM_KICK],110);
    crouch_k2.Flags = ({Player:PLAYER_FLAGS.MOVE_TO_BACK});
    crouch_k2.SetMediumAttack();
    crouch_k2.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.STANDING);
    crouch_k2.AddFrame(player,0,"",folder + "/crouch_k1-0.png",6,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-41,-16);
    crouch_k2.AddFrame(player,0,"",folder + "/crouch_k1-1.png",4,{ SwingSound:SWINGSOUND.MP,Combat: COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1|POSE_FLAGS.ALLOW_INTERUPT_2,HitSound:HITSOUND.MK },MISC_FLAGS.NONE,0,0,0,10,null,-46,-20,ATTACK_FLAGS.MEDIUM | ATTACK_FLAGS.HITS_LOW,[{ state: HIT_FLAGS.NEAR,x: 210,y: 40 },{ state: HIT_FLAGS.NEAR,x: 280,y: 10 },{ state: HIT_FLAGS.NEAR,x: 260,y: 1}],ATTACK_FLAGS.MEDIUM,1,1,15);
    crouch_k2.EndBlock();
    crouch_k2.AddFrame(player,0,"",folder + "/crouch_k1-0.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-41,-16);
    crouch_k2.Chain(crouch,2);

    var crouch_k3 = player.AddAnimation(POSE_FLAGS.CROUCHING|POSE_FLAGS.STANDING|POSE_FLAGS.ALLOW_INTERUPT_2,"crouch k3",0,[BUTTONS.CROUCH|BUTTONS.HARD_KICK],110);
    crouch_k3.SetHardAttack();
    crouch_k3.Flags = ({Combat:COMBAT_FLAGS.NO_SLIDE_BACK,Player:PLAYER_FLAGS.MOVE_TO_BACK});
    crouch_k3.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.CROUCHING,OVERRIDE_FLAGS.STANDING);
    crouch_k3.AddFrame(player,0,"",folder + "/crouch_k3-0.png",8,MISC_FLAGS.NONE,{ Player: PLAYER_FLAGS.MOBILE },0,0,0,0,null,-14,-13);
    crouch_k3.AddFrameWithSound(player,1,"audio/mbison/thrust-1.zzz",0,"",folder + "/crouch_k3-1.png",20,{SwingSound:SWINGSOUND.SLIDE0,Combat:COMBAT_FLAGS.ATTACK,Pose: POSE_FLAGS.ALLOW_INTERUPT_1,HitSound:HITSOUND.HK },MISC_FLAGS.NONE,0,0,0,10,null,-116,-16,ATTACK_FLAGS.HARD | ATTACK_FLAGS.HITS_LOW | ATTACK_FLAGS.TRIP,[{ state: HIT_FLAGS.NEAR,x: 160,y: 35 },{ state: HIT_FLAGS.FAR,x: 280,y: 35}],ATTACK_FLAGS.HARD,1,1,20,150);
    crouch_k3.EndBlock();
    crouch_k3.AddFrame(player,0,"",folder + "/crouch_k3-2.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-48,-13);
    crouch_k3.AddFrame(player,0,"",folder + "/cturn-2.png",6,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-74,-16);
    crouch_k3.Chain(crouch,2);

    /***************************************/
    /***************************************/
    /***************************************/

    var airKnockBackX = 0.2;

    var jump_p1 = player.AddAnimation(POSE_FLAGS.AIRBORNE|POSE_FLAGS.AIRBORNE_FB,"jump p1",0,[BUTTONS.LIGHT_PUNCH],0,true,true);
    jump_p1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.STANDING,OVERRIDE_FLAGS.NULL);
    jump_p1.AddFrame(player,0,"",folder + "/jump_p1-0.png",2,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-43,0);
    jump_p1.AddFrame(player,0,"",folder + "/jump_p1-1.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p1.AddFrame(player,0,"",folder + "/jump_p1-2.png",13,{SwingSound:SWINGSOUND.LP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:210,y:125,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:260,y:125,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_p1.EndBlock();
    jump_p1.AddFrame(player,0,"",folder + "/jump_p1-1.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p1.AddFrame(player,0,"",folder + "/jump_p1-0.png",4);
    jump_p1.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump_p1.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump_p1.Chain(jump_land);
    
    var jump_p2 = player.AddAnimation(POSE_FLAGS.AIRBORNE|POSE_FLAGS.AIRBORNE_FB,"jump p2",0,[BUTTONS.MEDIUM_PUNCH],0,true,true);
    jump_p2.SetMediumAttack();
    jump_p2.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.STANDING,OVERRIDE_FLAGS.NULL);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p1-0.png",3,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-43,0);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p1-1.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p2-0.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p2-1.png",4,{SwingSound:SWINGSOUND.MP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.MP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.MEDIUM,[{state:HIT_FLAGS.NEAR,x:210,y:125,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:260,y:125,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.MEDIUM,1,1,15);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p2-2.png",4,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.MP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.MEDIUM,[{state:HIT_FLAGS.NEAR,x:210,y:125,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:260,y:125,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.MEDIUM,1,1,15);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p2-1.png",4,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.MP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.MEDIUM,[{state:HIT_FLAGS.NEAR,x:210,y:125,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:260,y:125,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.MEDIUM,1,1,15);
    jump_p2.EndBlock();
    jump_p2.AddFrame(player,0,"",folder + "/jump_p1-1.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p2.AddFrame(player,0,"",folder + "/jump_p1-0.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p2.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump_p2.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump_p2.Chain(jump_land);
  
    var jump_p3 = player.AddAnimation(POSE_FLAGS.AIRBORNE|POSE_FLAGS.AIRBORNE_FB,"jump p3",0,[BUTTONS.HARD_PUNCH],0,true,true);
    jump_p3.SetHardAttack();
    jump_p3.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.STANDING,OVERRIDE_FLAGS.NULL);
    jump_p3.AddFrame(player,0,"",folder + "/jump_p3-0.png",4,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-43,0);
    jump_p3.AddFrame(player,0,"",folder + "/jump_p3-1.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p3.AddFrame(player,0,"",folder + "/jump_p3-2.png",3,{SwingSound:SWINGSOUND.HP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:230,y:85,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:330,y:55,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.HARD,1,1,20);
    jump_p3.AddFrame(player,0,"",folder + "/jump_p3-3.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:230,y:85,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:330,y:55,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.HARD,1,1,20);
    jump_p3.AddFrame(player,0,"",folder + "/jump_p3-2.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.HP},MISC_FLAGS.NONE,0,0,0,10,null,0,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:230,y:85,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:330,y:55,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.HARD,1,1,20);
    jump_p3.EndBlock();
    jump_p3.AddFrame(player,0,"",folder + "/jump_p1-0.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
    jump_p3.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump_p3.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump_p3.Chain(jump_land);
    
    var jump_k1 = player.AddAnimation(POSE_FLAGS.AIRBORNE|POSE_FLAGS.AIRBORNE_FB,"jump k1",0,[BUTTONS.LIGHT_KICK],0,true,true);
    jump_k1.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.STANDING,OVERRIDE_FLAGS.NULL);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-0.png",3,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-25,0);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-1.png",3,{SwingSound:SWINGSOUND.LP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-100,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-2.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-96,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-1.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-100,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-2.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-96,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-1.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-100,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-2.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-96,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-1.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-100,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.AddFrame(player,0,"",folder + "/jump_k1-2.png",3,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.LK},MISC_FLAGS.NONE,0,0,0,10,null,-96,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.LIGHT,[{state:HIT_FLAGS.NEAR,x:170,y:135,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:190,y:85,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.LIGHT,1,1,10);
    jump_k1.EndBlock();
    jump_k1.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump_k1.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump_k1.Chain(jump_land);
    
    var jump_k2 = player.AddAnimation(POSE_FLAGS.AIRBORNE|POSE_FLAGS.AIRBORNE_FB,"jump k2",0,[BUTTONS.MEDIUM_KICK],0,true,true);
    jump_k2.SetMediumAttack();
    jump_k2.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.STANDING,OVERRIDE_FLAGS.NULL);
    jump_k2.AddFrame(player,0,"",folder + "/jump_k1-0.png",3,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-25,0);
    jump_k2.AddFrame(player,0,"",folder + "/jump_k2-0.png",6,{SwingSound:SWINGSOUND.MP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.MK},MISC_FLAGS.NONE,0,0,0,10,null,-100,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.MEDIUM,[{state:HIT_FLAGS.NEAR,x:140,y:115,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:200,y:115,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:320,y:115,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.MEDIUM,1,1,15);
    jump_k2.EndBlock();
    jump_k2.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump_k2.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump_k2.Chain(jump_land);
    
    var jump_k3 = player.AddAnimation(POSE_FLAGS.AIRBORNE|POSE_FLAGS.AIRBORNE_FB,"jump k3",0,[BUTTONS.HARD_KICK],0,true,true);
    jump_k3.SetHardAttack();
    jump_k3.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.STANDING,OVERRIDE_FLAGS.NULL);
    jump_k3.AddFrame(player,0,"",folder + "/jump_k1-0.png",2,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-25,0);
    jump_k3.AddFrame(player,0,"",folder + "/jump_k3-0.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-100,0);
    jump_k3.AddFrame(player,0,"",folder + "/jump_k3-1.png",6,{SwingSound:SWINGSOUND.HP,Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.HK},MISC_FLAGS.NONE,0,0,0,10,null,-90,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:120,y:105,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:180,y:65,Fx : airKnockBackX,Fy : 0},{state:HIT_FLAGS.NEAR,x:260,y:-15,Fx : airKnockBackX,Fy : 0}],ATTACK_FLAGS.HARD,1,1,20);
    jump_k3.EndBlock();
    jump_k3.AddRepeatingFrame(player,-11,"168",folder + "/jump-4.png",5,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,-94,0,0,0,0,0,0,0);
    jump_k3.AddRepeatingFrame(player,-11,"168",folder + "/jump-5.png",CONSTANTS.FRAME_MAX,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,0,0,0,0,0,0,0,0);
    jump_k3.Chain(jump_land);

    var xSpeed = 0;
    for(var x = 0; x < 3; ++x)
    {
        xSpeed = x + 10;
        var projectile = player.AddProjectile("projectile",160,190,xSpeed);

        projectile.hitSound_ = HITSOUND.HP3;

        projectile.fx_ = 0.5;
        projectile.fy_ = 0.5;


        projectile.EnergyToAdd = (10);
        projectile.attackState_ = ATTACK_FLAGS.HARD|ATTACK_FLAGS.FLOOR_AIRBORNE_HARD;
        projectile.hitState_ = HIT_FLAGS.FAR;
        projectile.flagsToSend_ = ATTACK_FLAGS.HARD|ATTACK_FLAGS.REAR;
        if(x == 0)
            projectile.flagsToSend_ |= ATTACK_FLAGS.SPECIAL1;
        else if(x == 1)
            projectile.flagsToSend_ |= ATTACK_FLAGS.SPECIAL2;
        else if(x == 2)
            projectile.flagsToSend_ |= ATTACK_FLAGS.SPECIAL3;

        projectile.baseDamage_ = 25;

        /*this formula is applied each frame to compute the X coordinate of the projectile*/
        projectile.animation_.VxFn = (function(args) { return function(xSpeed,t) { return xSpeed; } });
        /*this formula is applied each frame to compute the Y coordinate of the projectile*/
        projectile.animation_.VyFn = (function(args) { return function(ySpeed,t) { return ySpeed; } });

        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-0.png",1,0,0,-23);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-1.png",2,0,0,0);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-2.png",1,0,0,-25);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-1.png",2,0,0,0);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-3.png",2,0,0,-23);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-1.png",2,0,0,0);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-4.png",1,0,0,-25);
        projectile.animation_.AddFrame(player,0,"",folder + "/projectile-1.png",2,0,0,0);

        projectile.disintegrationAnimation_.AddFrame(player,0,"",folder + "/projectile-disintegrate-0.png",3,0,0,-32);
        projectile.disintegrationAnimation_.AddFrame(player,0,"",folder + "/projectile-disintegrate-1.png",3,0,0,-44);
        projectile.disintegrationAnimation_.AddFrame(player,0,"",folder + "/projectile-disintegrate-2.png",3,0,0,-20);

        
        var button = BUTTONS.LIGHT_PUNCH;
        if(x == 1) {button = BUTTONS.MEDIUM_PUNCH;}
        else if(x == 2) {button = BUTTONS.HARD_PUNCH;}

        var fireball = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.CROUCHING|POSE_FLAGS.WALKING_BACKWARD|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.ALLOW_INTERUPT_1,"fireball p" + (x+1),CONSTANTS.MAX_FRAME,[BUTTONS.BACK|BUTTONS.CHARGE,0,BUTTONS.FORWARD,BUTTONS.FORWARD|button],0,false);
        fireball.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.ALL,OVERRIDE_FLAGS.NONE);
        fireball.IsSpecialMove = true;
        fireball.EnergyToAdd = (5);
        fireball.Flags = ({Combat:COMBAT_FLAGS.PROJECTILE_ACTIVE});
        fireball.AddFrame(player,0,"",folder + "/block-0.png",2,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-35,-11);
        fireball.AddFrame(player,0,"",folder + "/fireball-0.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-70,-11);
        fireball.AddFrame(player,0,"",folder + "/fireball-1.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-70,-11);
        fireball.AddFrame(player,0,"",folder + "/fireball-2.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-70,-11);
        fireball.AddFrame(player,0,"",folder + "/fireball-3.png",1,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-70,-11);
        fireball.AddFrame(player,0,"",folder + "/p2-0.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-60,-11);
        fireball.AddFrameWithSound(player,1,"audio/mbison/thrust-2.zzz",0,"",folder + "/fireball-4.png",1,{Combat:COMBAT_FLAGS.SPAWN_PROJECTILE|COMBAT_FLAGS.PROJECTILE_ACTIVE|COMBAT_FLAGS.STOP_SLIDE_BACK},MISC_FLAGS.NONE,0,0,0,0,x,0,-11);
        fireball.AddFrameWithSound(player,1,"audio/misc/projectile-0.zzz",0,"",folder + "/fireball-5.png",2,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);
        fireball.AddFrame(player,0,"",folder + "/fireball-6.png",24,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-20,-11);
        fireball.AddFrame(player,0,"",folder + "/p1-3.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,10,-11);
        fireball.AddFrame(player,0,"",folder + "/turn-2.png",3,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-10,-11);
    }

    /*******************************************************/
    /*******************************************************/
    /*******************************************************/

    var flipKickLand = player.AddAnimation(POSE_FLAGS.ANY,"flip kick land",0,["flip_kick_land"],0,false);
    flipKickLand.AddFrame(player,0,"",folder + "/crouch_k3-2.png",4,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},0,0,0,0,null,-48,-13);


    for(var i = 0; i < 4; ++i)
    {
        var button = BUTTONS.LIGHT_KICK;
        var x = 5;
        if(i == 1) {button = BUTTONS.MEDIUM_KICK; x = 5;}
        else if(i == 2) {button = BUTTONS.HARD_KICK; x = 5;}

        var flipKick = player.AddAnimation(POSE_FLAGS.STANDING|POSE_FLAGS.CROUCHING|POSE_FLAGS.WALKING_BACKWARD|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.ALLOW_INTERUPT_1,"flip kick k"+(i+1), CONSTANTS.MAX_FRAME,[BUTTONS.BACK|BUTTONS.CHARGE,0,BUTTONS.FORWARD,BUTTONS.FORWARD|button],0,false);
        flipKick.OverrideFlags = new MoveOverrideFlags(OVERRIDE_FLAGS.ALL,OVERRIDE_FLAGS.NONE);
        flipKick.IsSpecialMove = true;
        flipKick.EnergyToAdd = (5);
        //flipKick.Flags = {};
        flipKick.Vy = 130;
        flipKick.Vx = 80;
        flipKick.VxFnArgs = {};
        flipKick.VxAirFn = (function(args) { return function(dx,t) { return dx; } });

        

        flipKick.AddRepeatingFrame(player,0,"",folder + "/crouch_k3-2.png",4,MISC_FLAGS.NONE,{Player:PLAYER_FLAGS.MOBILE},x,0,0,0,-48,-13);
        flipKick.AddFrameWithSound(player,1,"audio/mbison/thrust-0.zzz",0,"",folder + "/skick-0.png",4, {Pose:POSE_FLAGS.AIRBORNE},MISC_FLAGS.NONE,0,0,0,0,null,-28,0);
        flipKick.AddFrame(player,0,"",folder + "/skick-1.png",4,MISC_FLAGS.NONE,MISC_FLAGS.NONE,0,0,0,0,null,-43,0);
        flipKick.AddFrame(player,0,"",folder + "/skick-2.png",4,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.HK},MISC_FLAGS.NONE,0,0,0,20,null,-20,0,ATTACK_FLAGS.HITS_HIGH|ATTACK_FLAGS.SPECIAL|ATTACK_FLAGS.HARD,[{state:HIT_FLAGS.NEAR,x:170,y:105},{state:HIT_FLAGS.NEAR,x:220,y:105},{state:HIT_FLAGS.NEAR,x:280,y:105}],ATTACK_FLAGS.HARD,CONSTANTS.FIRST_HIT,1,20);
        flipKick.AddFrame(player,0,"",folder + "/skick-3.png",CONSTANTS.MAX_FRAME,{Combat:COMBAT_FLAGS.ATTACK,HitSound:HITSOUND.HK},MISC_FLAGS.NONE,0,0,0,20,null,-100,0,ATTACK_FLAGS.SPECIAL|ATTACK_FLAGS.HARD|ATTACK_FLAGS.KNOCKDOWN,[{state:HIT_FLAGS.NEAR,x:150,y:105},{state:HIT_FLAGS.NEAR,x:220,y:5}],ATTACK_FLAGS.HARD,CONSTANTS.SECOND_HIT,1,20);
        flipKick.Chain(flipKickLand);
    }

    for(var i = 0; i < 4; ++i)
    {
        var keys = [BUTTONS.FORWARD|BUTTONS.LIGHT_PUNCH];
        var flags = COMBAT_FLAGS.TELEPORT_BEHIND;
        var type = "";
        switch(i)
        {
            case 0: {type = "behind"; keys = [BUTTONS.FORWARD,0,BUTTONS.CROUCH,BUTTONS.CROUCH|BUTTONS.FORWARD,BUTTONS.CROUCH|BUTTONS.FORWARD|BUTTONS.LIGHT_KICK]; flags = COMBAT_FLAGS.TELEPORT_BEHIND; break; }
            case 1: {type = "infront"; keys = [BUTTONS.FORWARD,0,BUTTONS.CROUCH,BUTTONS.CROUCH|BUTTONS.FORWARD,BUTTONS.CROUCH|BUTTONS.FORWARD|BUTTONS.LIGHT_PUNCH]; flags = COMBAT_FLAGS.TELEPORT_INFRONT; break; }
            case 2: {type = "middle"; keys = [BUTTONS.BACK,0,BUTTONS.CROUCH,BUTTONS.CROUCH|BUTTONS.BACK,BUTTONS.CROUCH|BUTTONS.BACK|BUTTONS.LIGHT_KICK]; flags = COMBAT_FLAGS.TELEPORT_MIDDLE; break; }
            case 3: {type = "back"; keys = [BUTTONS.BACK,0,BUTTONS.CROUCH,BUTTONS.CROUCH|BUTTONS.BACK,BUTTONS.CROUCH|BUTTONS.BACK|BUTTONS.LIGHT_PUNCH]; flags = COMBAT_FLAGS.TELEPORT_BACK; break; }
        }

        var teleport_end = player.AddAnimation(POSE_FLAGS.CROUCHING|POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"teleport end",0,["teleport_end"],1,false,false,0,null);
        teleport_end.Flags = {Combat: COMBAT_FLAGS.TELEPORT_END};
        teleport_end.AddFrame(player, 0, "", "", 10, {Combat:flags,Player:PLAYER_FLAGS.INVISIBLE|PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, 7, 26, 0, 0, 0, 0, 0, 0);
        teleport_end.AddFrameWithSound(player, 1, "audio/mbison/teleport.zzz", 0, "", folder + "/teleport-4.png", 2, {Player:PLAYER_FLAGS.INVISIBLE|PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, 7, 26, 0, 0, 0, 0, 0, 0);
        teleport_end.AddFrame(player, 0, "", folder + "/teleport-3.png", 1, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, 2, 21, 0, 0, 0, 0, 0, 0);
        teleport_end.AddFrame(player, 0, "", folder + "/teleport-2.png", 2, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -96, 11, 0, 0, 0, 0, 0, 0);
        teleport_end.AddFrame(player, 0, "", folder + "/teleport-1.png", 3, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -96, 0, 0, 0, 0, 0, 0, 0);
        teleport_end.AddFrame(player, 0, "", folder + "/teleport-0.png", 5, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -96, 0, 0, 0, 0, 0, 0, 0);

        var teleport_start = player.AddAnimation(POSE_FLAGS.CROUCHING|POSE_FLAGS.STANDING|POSE_FLAGS.WALKING_FORWARD|POSE_FLAGS.WALKING_BACKWARD,"teleport " + type,50,keys,1,false,false,0,null);
        teleport_start.Flags = {Combat: COMBAT_FLAGS.TELEPORT_START};
        teleport_start.AddFrameWithSound(player, 1, "audio/mbison/teleport.zzz", 0, "", folder + "/teleport-0.png", 1, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -96, 0, 0, 0, 0, 0, 0, 0);
        teleport_start.AddFrame(player, 0, "", folder + "/teleport-1.png", 1, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -96, 0, 0, 0, 0, 0, 0, 0);
        teleport_start.AddFrame(player, 0, "", folder + "/teleport-2.png", 1, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, -96, 11, 0, 0, 0, 0, 0, 0);
        teleport_start.AddFrame(player, 0, "", folder + "/teleport-3.png", 1, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, 2, 21, 0, 0, 0, 0, 0, 0);
        teleport_start.AddFrame(player, 0, "", folder + "/teleport-4.png", 1, {Player:PLAYER_FLAGS.USE_ATTACK_DIRECTION|PLAYER_FLAGS.INVULNERABLE|PLAYER_FLAGS.IGNORE_ATTACKS|PLAYER_FLAGS.IGNORE_COLLISIONS}, {Player:PLAYER_FLAGS.MOBILE}, 0, 0, 0, 0, null, 7, 26, 0, 0, 0, 0, 0, 0);
        teleport_start.Chain(teleport_end);
    }


    return player;
}