package com.ssafy.fitit.model.dto;

public class MissionComment {

    private int missionCommentNo;
    private int missionNo;
    private int userNo;
    private String content;

    public MissionComment() {
    }

    public int getMissionCommentNo() {
        return missionCommentNo;
    }

    public void setMissionCommentNo(int missionCommentNo) {
        this.missionCommentNo = missionCommentNo;
    }

    public int getMissionNo() {
        return missionNo;
    }

    public void setMissionNo(int missionNo) {
        this.missionNo = missionNo;
    }

    public int getUserNo() {
        return userNo;
    }

    public void setUserNo(int userNo) {
        this.userNo = userNo;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
