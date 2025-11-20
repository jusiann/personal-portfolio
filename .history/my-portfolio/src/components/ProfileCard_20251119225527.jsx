import SocialLinks from './SocialLinks';

export default function ProfileCard({
  name = '',
  bio = '',
  avatarSrc = '',
  avatarAlt = '',
  links = [],
  className = '',
}) {
  const defaultAvatarAlt = avatarAlt || `${name} — profil fotoğrafı`;

  return (
    <article className={`profile-card ${className}`}>
      {/* Sol accent border */}
      <div className="profile-card__accent" aria-hidden="true" />

      {/* Arka plan deseni */}
      <div className="profile-card__pattern" aria-hidden="true" />

      {/* Profil fotoğrafı bölümü */}
      <div className="profile-card__avatar-wrapper">
        <div className="profile-card__avatar">
          <img
            src={avatarSrc}
            alt={defaultAvatarAlt}
            loading="lazy"
            className="profile-card__avatar-image"
          />
        </div>
      </div>

      {/* İçerik bölümü */}
      <div className="profile-card__content">
        <h1 className="profile-card__name">{name}</h1>
        <p className="profile-card__bio">{bio}</p>

        {/* Sosyal medya linkleri */}
        {links && links.length > 0 && (
          <div className="profile-card__links">
            <SocialLinks links={links} />
          </div>
        )}
      </div>
    </article>
  );
}
