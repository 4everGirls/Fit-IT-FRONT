package com.ssafy.fitit.model.dto;

public class Mission {

    private int missionNo;
    private int challengeNo;
    private String videoId;
    private String videoTitle;
    private String channelName;
    private String videoThumbnail;

    public Mission() {
    }

    public int getMissionNo() {
        return missionNo;
    }

    public void setMissionNo(int missionNo) {
        this.missionNo = missionNo;
    }

    public int getChallengeNo() {
        return challengeNo;
    }

    public void setChallengeNo(int challengeNo) {
        this.challengeNo = challengeNo;
    }

    public String getVideoId() {
        return videoId;
    }

    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    public String getVideoTitle() {
        return videoTitle;
    }

    public void setVideoTitle(String videoTitle) {
        this.videoTitle = videoTitle;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public String getVideoThumbnail() {
        return videoThumbnail;
    }

    public void setVideoThumbnail(String videoThumbnail) {
        this.videoThumbnail = videoThumbnail;
    }
}
