package com.ssafy.fitit.model.dto;

public class ChallengeReview {

    private int challengeReviewNo;
    private int challengeNo;
    private int userNo;
    private String content;
    private int reviewScore;

    public ChallengeReview() {
    }

    public int getChallengeReviewNo() {
        return challengeReviewNo;
    }

    public void setChallengeReviewNo(int challengeReviewNo) {
        this.challengeReviewNo = challengeReviewNo;
    }

    public int getChallengeNo() {
        return challengeNo;
    }

    public void setChallengeNo(int challengeNo) {
        this.challengeNo = challengeNo;
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

    public int getReviewScore() {
        return reviewScore;
    }

    public void setReviewScore(int reviewScore) {
        this.reviewScore = reviewScore;
    }
}
