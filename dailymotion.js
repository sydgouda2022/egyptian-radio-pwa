// Official National Media Authority Dailymotion broadcasts (public video IDs).
// Embedding is experimental. Video presence does not prove iOS PWA playback or lock-screen audio.
// Do not extract signed HLS manifests, proxy the broadcaster's streams, or mark iframe loads as audio success.
export const masperoDailymotion=Object.freeze({
 "eg:maspero:general":"x8n6dt3",
 "eg:maspero:cultural":"x8n6eci",
 "eg:maspero:youth-sports":"x8n6dzo",
 "eg:maspero:middle-east":"x8n6drt",
 "eg:maspero:radio-masr":"x8n6dpk",
 "eg:maspero:quran":"x84wyku",
 "eg:maspero:voice-arabs":"x8n6dqq",
 "eg:maspero:songs":"x8n6dyz",
 "eg:maspero:cairo":"x8n6ebs",
 "eg:maspero:european":"x8n6e6w"
});
export function dailymotionVideoURL(id){
 if(!/^x[0-9a-z]{5,10}$/i.test(id))throw Error("invalid_dailymotion_video_id");
 return "https://www.dailymotion.com/video/"+id;
}
export function dailymotionEmbedURL(id,mode="standard"){
 if(!/^x[0-9a-z]{5,10}$/i.test(id))throw Error("invalid_dailymotion_video_id");
 // Legacy iframe endpoint is officially redirected to Dailymotion's new default player.
 // Alternative is Dailymotion's documented player-based embed, useful for iPhone A/B testing.
 return mode==="new"?"https://geo.dailymotion.com/player/x8lr5.html?video="+id:
 "https://www.dailymotion.com/embed/video/"+id;
}
