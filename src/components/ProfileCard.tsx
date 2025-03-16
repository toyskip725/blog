import "./ProfileCard.css";

const profile = {
  website: "https://toyskip725.github.io",
  github: "https://github.com/toyskip725",
  x: "https://x.com/toyskip725",
};

const ProfileCard = () => {
  return (
    <div class="card-container">
      <div>
        <img src="profile.svg" class="icon" />
      </div>
      <div class="profile-content">
        <div class="profile-card-main">
          <p class="profile-card-header">AUTHOR</p>
          <p class="profile-card-name">澄 (toyskip725)</p>
        </div>
        <ul class="profile-card-link-list">
          <li class="profile-card-link">
            <span class="profile-card-link-header">Website</span>
            <a href={profile.website}>{profile.website}</a>
          </li>
          <li class="profile-card-link">
            <span class="profile-card-link-header">GitHub</span>
            <a href={profile.github} target="_blank" rel="noopener noreferer">{profile.github}</a>
          </li>
          <li class="profile-card-link">
            <span class="profile-card-link-header">X</span>
            <a href={profile.x} target="_blank" rel="noopener noreferer">{profile.x}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;