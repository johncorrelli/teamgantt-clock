function configureClocks()
{
    const BOLD_AS_BLUE = "#00ADEE";
    const CLOCK_COLOR = "#323844";
    const GREY = "#DDD";
    const SIZE = 250;
    const TG_BLUE = "#5CBCD6";
    const TG_GREEN = "#A1C14C";
    const TG_MILESTONE = "#FBA22C";
    const TG_PURPLE = "#B970D7";

    const selectedClock = clock_planets;
    const defaultClock = {
        "dial1_color": TG_BLUE,
        "dial2_color": TG_GREEN,
        "dial3_color": TG_PURPLE,
        "indicate_color": CLOCK_COLOR,
        "indicate": true,
        "time_add_color": CLOCK_COLOR,
        "time_add": 2,
        "track": TG_MILESTONE,
    };

    const pst = {
       ...defaultClock,
        "time_zone": "America/Los_Angeles",
    };
    const pst_clock = document.getElementById('clock_pst');
    clock_pst = pst_clock.getContext('2d');
    selectedClock(SIZE, clock_pst, pst);

    const mtn = {
       ...defaultClock,
        "time_zone": "America/Denver",
    };
    const mtn_clock = document.getElementById('clock_mtn');
    clock_mtn = mtn_clock.getContext('2d');
    selectedClock(SIZE, clock_mtn, mtn);

    const cst = {
       ...defaultClock,
        "time_zone": "America/Chicago",
    };
    const cst_clock = document.getElementById('clock_cst');
    clock_cst = cst_clock.getContext('2d');
    selectedClock(SIZE, clock_cst, cst);

    const est = {
       ...defaultClock,
        "time_zone": "America/New_York",
    };
    const est_clock = document.getElementById('clock_est');
    clock_est = est_clock.getContext('2d');
    selectedClock(SIZE, clock_est, est);
}